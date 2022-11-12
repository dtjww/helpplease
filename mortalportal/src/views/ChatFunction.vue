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
        <ChatMsg :textList="textList" :myUsername="myUsername"/>
        <br>
        <h4>----------------------------------</h4>
        <br>

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


        <h4>Parsing session here</h4>
        <div> insert here</div>
        <br>
        <P>{{myChats}}</P>
        <p>{{tabInfo}}</p>
        <p> chatid : task id</p>
        <br>
        <br>
        <h4>----------------------------------</h4>
        <br>
        
        <q-list padding style="height: calc(100% - 150px); margin-top: 120px; border-right: 1px solid #ddd; text-align:left;">
            

            <template v-for="index in this.tabInfo">
                <p>{{index}}</p>
                <q-item clickable>
                    <q-item-section avatar>
                        <q-avatar>
                            <img src="https://cdn.quasar.dev/img/avatar.png"/>
                        </q-avatar>
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>{{index.name}}</q-item-label>
                        <q-item-label caption>{{index.desc}}</q-item-label>
                    </q-item-section>
                </q-item>

            </template>
            <!-- first chat -->
            <q-item clickable v-ripple
            :active="tab === 'chat1'"
            @click="tab = 'chat1'"
            >
            <!-- ^^ this has to be looped -->
            <!-- VV this has to be looped too -->
                    <q-item-section side>
                      <q-avatar rounded size="48px">
                        <!-- Other persons  -->
                        <img src="https://cdn.quasar.dev/img/avatar.png" />
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>{{postUsername}}</q-item-label>
                      <q-item-label caption>{{postTitle}}</q-item-label>
                    </q-item-section>

            </q-item>

            <!-- second chat -->
            <q-item clickable v-ripple
            :active="tab === 'chat2'"
            @click="tab = 'chat2'"
            >
                <q-item-section side>
                  <q-avatar rounded size="48px">
                    <img src="https://cdn.quasar.dev/img/avatar.png" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Chat username here</q-item-label>
                  <q-item-label caption>Task Title here</q-item-label>
                </q-item-section>
            </q-item>

          </q-list>
          <div>
          <q-tab-panels v-model="tab" style="height: 520px;">
                    
                    
            <q-tab-panel name="chat1">
                <div class="text-h6">chat1</div>
                <p v-for="n in 13" :key="n">
                 lectus commodi perferendis voluptate?
                </p>
            </q-tab-panel>
    
            <q-tab-panel name="chat2">
              <div class="text-h6">chat2</div>
              <p v-for="n in 13" :key="n">
                , quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
              </p>
            </q-tab-panel>
    
            <q-tab-panel name="chat3">
              <div class="text-h6">chat3</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>
        </div>




      </div>

</template>

<script>
// import { ref } from 'vue'
import axios from 'axios'
// import { ref } from 'vue'
import { db } from '../firebase.js';
import { push, ref as dbRef} from "firebase/database";
import { onValue } from "firebase/database";
import ChatMsg from '@/components/ChatMsg.vue';
import { useCounterStore } from "@/store/store";
const storeName = useCounterStore()



export default {
    name: "ChatFunction",
    setup () {
    return {
    //   tab: ref('chat1'),
    //   splitterModel: ref(20)
    }
  },
    data() {
        return {
            tab: 'chat1',

            loginData: {},
            myEmail: "",
            myUsername: "",
            myPassword: "",
            myTasks: "",
            myChats: "",

            currUser: storeName.username,

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
            newchat: [],

            tabThings:[],
            tabInfo:[],

        };
    },
    methods: {
        getMyUserAxios() {
            axios.get("https://dreemteem-829c5-default-rtdb.firebaseio.com/Login/"+ this.currUser +".json")
                .then(response => {
                console.log("called getMyUser");
                console.log(response.data);
                this.loginData = response.data;
                this.myUsername = response.data.username;
                this.myEmail = response.data.email;
                this.myPassword = response.data.password;
                this.myChats = response.data.chats;
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
        tabData(){
            console.log("called tabData");
            var chatchat = { "chat10": " -NF4gATFY3s-fUocXHLp", "chat11": "-NF4i_7WjUQJQiJm6O5w" }
            for (var index in chatchat) {
                let temptaskid = this.myChats[index];
                axios.get("https://dreemteem-829c5-default-rtdb.firebaseio.com/TaskData/" + temptaskid + ".json")
                .then(response => {
                this.tabThings = response.data;
                console.log(this.tabThings);
                let placeholder = {};
                placeholder['user'] = this.tabThings.username
                placeholder['title'] = this.tabThings.name
                this.tabInfo.push(placeholder)}) 
            }
            console.log(this.tabInfo);
        }
    },
    mounted() {
        this.toload();
        this.id = "-NF4gATFY3s-fUocXHLp";
        console.log(this.id);
        this.tabData()
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