<!-- eslint-disable -->
<template>

    <div id="ChatFunction" style="text-align:left; background-colour: white;">

        <h4>Place My user details here</h4>
        <div> email: {{myEmail}} , username : {{myUsername}} , password: {{myPassword}}</div>
        <div> tasks: {{myTasks}}</div>
        <br>
        <h4>----------------------------------</h4>
        <br>
        <h4>Place task details here</h4>
        <div>{{postId}}</div>
        <div>{{postDate}}</div>
        <div>{{postPrice}}</div>
        <div>{{postDesc}}</div>
        <div>{{postUsername}}</div>
        <div>{{postCategory}}</div>
        <div>{{postChat}}</div>
        <div> chatId: this shld be myUsername</div>

        <br>
        <h4>----------------------------------</h4>
        <br>

        <h4>Place input text box here</h4>
        <q-input class="textinput" rounded outlined v-model="myMsg" placeholder="Send a Text Here" @keyup.enter="sendMessage()">
            <template v-slot:after>
              <q-btn round dense flat icon="send" @click="sendMessage()"/>
            </template>
          </q-input>
        <div> {{myUsername}}: {{myMsg}}</div>
        <br>
        <h4>----------------------------------</h4>
        <br>


        <h4>Place Chat Msgs here</h4>
        <div> insert here</div>
        <div> {{textList}} </div>
        <br>
        <br>
        <br>
        
        <h4>----------------------------------</h4>
        <br>

        <ChatMsg :textList="textList" :myUsername="myUsername"/>

        <!-- <template v-for="msg in textList">
            <template v-if="getMyUsername(msg.username)">
                <q-chat-message
                    name="me"
                    avatar="https://cdn.quasar.dev/img/avatar1.jpg"
                    :text= Array(msg.text)
                    stamp="12:34" 
                    sent
                    />
            </template>
            <template v-else>
                <q-chat-message
                    :name= msg.username
                    avatar="https://cdn.quasar.dev/img/avatar1.jpg"
                    :text= Array(msg.text)
                    stamp="12:34" 
                    />
            </template>
        </template> -->
      </div>

</template>

<script>
// import { ref } from 'vue'
import axios from 'axios'
import { db } from '../firebase.js';
import { push, ref as dbRef} from "firebase/database";
import { onValue } from "firebase/database";
import ChatMsg from '@/components/ChatMsg.vue';



export default {
    name: "ChatFunction",
    data() {
        return {
            loginData: {},
            myEmail: "",
            myUsername: "",
            myPassword: "",
            myTasks: "",

            posts: [],
            postId: "",
            postUsername: "",
            postChat: {},
            postDate: "",
            postCategory: "",
            postDesc: "",
            postLoc: "",
            postPrice: "",
            postTitle: "",

            myMsg: "",

            textList: [],
            count: 0,
            newchat: []
        };
    },
    methods: {
        getMyUserAxios() {
            axios.get("https://dreemteem-829c5-default-rtdb.firebaseio.com/Login/@georgelee.json")
                .then(response => {
                console.log("called getMyUser");
                console.log(response.data);
                this.loginData = response.data;
                this.myUsername = response.data.username;
                this.myEmail = response.data.email;
                this.myPassword = response.data.password;
                this.myTasks = response.data.tasksInteracted;
                console.log(response.data.tasksInteracted);
            })
                .catch(error => {
                console.log(error);
            });
        },
        getPostAxios() {
            // this.id = this.$route.params.id
            this.id = "-NF4gATFY3s-fUocXHLp";
            axios.get("https://dreemteem-829c5-default-rtdb.firebaseio.com/TaskData/" + this.id + ".json")
                .then(response => {
                this.posts = response.data;
                console.log("called getPost");
                console.log(this.posts);
                this.postId = this.posts.id,
                this.postUsername = this.posts.username,
                this.postChat = this.posts.chats,
                this.postDate = this.posts.date,
                this.postCategory = this.posts.category,
                this.postDesc = this.posts.desc,
                this.postLoc = this.posts.loc,
                this.postPrice = this.posts.price,
                this.postTitle = this.posts.name;
                console.log(this.postChat);

                for (let eachValue in this.postChat) {
                    console.log(eachValue);
                    console.log(this.postChat[eachValue]);
                    if (this.postChat[eachValue] == "@georgelee") {
                        console.log("found my username");
                        console.log(eachValue + " this is the chat to retrieve");
                    }
                }

            })
                .catch(error => {
                console.log(error);
            });
        },
        getChat() {
            // this.id = this.$route.params.id
            axios.get("https://dreemteem-829c5-default-rtdb.firebaseio.com/Message/chat1.json")
                .then(response => {
                this.textList = response.data;
                console.log("called getChat");
                console.log(this.textList);
            })
                .catch(error => {
                console.log(error);
            });
        },
        toload() {
            this.getMyUserAxios();
            this.getPostAxios();
        },
        submitMSG(val) {
            // Parsing the data into firebase Realtime Database
            console.log("called submitMSG");
            let key;
            push(dbRef(db, "Message/chat1"), val)
                .then((data) => {
                // to get the key of the file                
                key = data.key;
                console.log("successful push of msg " + val);
                return key;
            })
                .catch((error) => {
                console.log(error);
            });
            this.submit = true;
        },
        sendMessage() {
            // e.preventDefault();
            console.log("called sendMessage");
            if (this.myMsg != "") {
                console.log(this.myUsername);
                console.log(this.myMsg);
                const message = {
                    username: this.myUsername,
                    text: this.myMsg
                };
                // To-Do: Push message to firebase
                this.submitMSG(message);
                this.myMsg = "";
                console.log(message.username + ": " + message.text);
                // this line pushes the message into the text area
                // this.count = this.count + 1;
                // let obj = {};
                // obj[String(this.count)] = message;
                // // this.textList += obj
                // console.log(obj);
                // this.textList[String(this.count)] = message;
                // console.log(this.textList);
                this.chatRefresh();
            }
        },
        chatRefresh() {
            const chatRef = dbRef(db, "Message/chat1");
            onValue(chatRef, (snapshot) => {
                const data = snapshot.val();
                // const data2 = snapshot.data;
                // updateMsg(postElement, data);
                // const updateChat = updateChat(this.newChat, data);
                this.newchat = data;
                // this.newnewchat = data2;
                this.getChat();
                console.log(this.textList);
                });
            // this.newchat = updateChat
            console.log("called chatRefresh");
        },
    },
    mounted() {
        this.toload();
        this.id = "-NF4gATFY3s-fUocXHLp";
        console.log(this.id);
    },
    created() {
        this.getChat();
    },
    components: { ChatMsg }
}
</script>

<style>
div {
    background-color: #f5f5f5;
}
</style>