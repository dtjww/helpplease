
<!-- xuen --> 
<template>

  <div class="back">
    <NavBar msg="This is my NavBar bro"/>
    <!-- <div class="about">
      <h1> hellooo </h1>
      <h2 class="format1"> {{message}} </h2>
    </div> -->
  </div>



  <div class="q-ma-md container">
    <q-layout view="lHh Lpr lff" container class="shadow-2 rounded-borders" style="height: 520px">

      <q-drawer
        v-model="drawer"
        width="280"
        show-if-above
        :breakpoint="400"
        class="bg-light-blue-1 adjust"
      >
          <q-list padding style="height: calc(100% - 150px); margin-top: 120px; border-right: 1px solid #ddd; text-align:left;">
            <!-- first chat -->
            <q-item clickable v-ripple
            :active="tab === 'chat1'"
            @click="tab = 'chat1'"
            >
                    <q-item-section side>
                      <q-avatar rounded size="48px">
                        <img src="https://cdn.quasar.dev/img/avatar.png" />
                        <q-badge floating color="teal">new</q-badge>
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>Mary</q-item-label>
                      <q-item-label caption>2 new messages</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      3 min ago
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
                    <q-badge floating color="teal">new</q-badge>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Chicken</q-item-label>
                  <q-item-label caption>1 new message</q-item-label>
                </q-item-section>
                <q-item-section side>
                  3 min ago
                </q-item-section>
            </q-item>

          </q-list>

        <!-- my profile -->
        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 130px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <!-- <div class="text-weight-bold">{{loginData.fName}} {{loginData.lName}} </div> -->
            <div>{{myUsername}}</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
        <!-- <q-page padding> -->
          <q-scroll-area style="height: 520px;">
                  <q-tab-panels v-model="tab" style="height: 520px;">
                    
                    
                    <q-tab-panel name="chat1">
                      <div class="text-h6">chat1</div>

                      <q-item class="bg-pink-1" style="margin:0%; border:solid red 2px; border-radius:7px; text-align:left">
                        <q-item-section side class="displayhide">
                          <img :src="posts.file" style="height:40px">
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>{{postDesc}}</q-item-label>
                          <q-item-label caption>{{postUsername}}</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                          <q-item-label>Task button here</q-item-label>
                        </q-item-section>
                      </q-item>

                      <div class="q-ma-sm bg-grey-1" style="padding:5px; border-radius:3%">
                        <!-- for scroll area -->
                        <q-scroll-area style="height: 320px; max-width: auto; text-align:left">
                            <!-- for chat -->
                            <div class="bg-bg-deep-purple-1 back">
                              <ChatMsg :textList="textList" :myUsername="myUsername"/>
                            </div>
                        </q-scroll-area>
                    </div>
              
          
                    <!-- FOR INPUT OF TEXT -->
                    <q-input class="textinput" rounded outlined v-model="myMsg" placeholder="Send a Text Here" @keyup.enter="sendMessage()">
                      <template v-slot:after>
                        <q-btn round dense flat icon="send" @click="sendMessage()"/>
                      </template>
                    </q-input>
                  <div> {{myUsername}}: {{myMsg}}</div>

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
          </q-scroll-area>

        <!-- </q-page> -->
      </q-page-container>
    </q-layout>
   
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import { ref } from 'vue'
import axios from 'axios'
import { db } from '../firebase.js';
import { push, ref as dbRef} from "firebase/database";
import { onValue } from "firebase/database";
import ChatMsg from '@/components/ChatMsg.vue';

export default {
  name: 'ChatpageView',
      components: {
    NavBar,
    ChatMsg
},
  data () {
        return {
            tab: 'chat1',

            username: '',
            messages: [],
            text: '',

            loginData: {},
            myEmail: "",
            myUsername: "",
            myPassword: "",
            myTasks: "",

            posts: [],
            postId: '',
            postUsername: '',
            postChat: {},
            postDate: '',
            postCategory: '',
            postDesc: '',
            postLoc: '',
            postPrice: '',
            postTitle: '',
            
            myMsg: "",

            textList: [],
            count: 0,
            newchat: []
        }
    },
  setup () {
    return {
      drawer: ref(false)
    }
  },
  methods: {
      getMyUserAxios() {
          axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/Login/@georgelee.json')
              .then(response => {
                  console.log("called getMyUser")
                  console.log(response.data)
                  this.loginData = response.data
                  this.myUsername = response.data.username
                  this.myEmail = response.data.email
                  this.myPassword = response.data.password
                  this.myTasks = response.data.tasksInteracted
                  console.log(response.data.tasksInteracted)
              })
              .catch(error => {
                  console.log(error)
              })
      },
      getPostAxios() {
            // this.id = this.$route.params.id
            this.id = "-NF4gATFY3s-fUocXHLp"
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/TaskData/' + this.id + '.json')
                .then(response => {
                    this.posts = response.data
                    console.log("called getPostAxios")
                    console.log(this.posts)
                    this.postId = this.posts.id ,
                    this.postUsername = this.posts.username,
                    this.postChat = this.posts.chats,
                    this.postDate = this.posts.date,
                    this.postCategory = this.posts.category,
                    this.postDesc = this.posts.desc,
                    this.postLoc = this.posts.loc,
                    this.postPrice = this.posts.price,
                    this.postTitle = this.posts.name
                    console.log(this.postChat)
                    for (let eachValue in this.postChat) {
                        console.log(eachValue)
                        console.log(this.postChat[eachValue])
                        if(this.postChat[eachValue] == "@georgelee") {
                            console.log("found my username")
                            console.log(eachValue + " this is the chat to retrieve")
                        }
                    }
                })
                .catch(error => {
                    console.log(error)
                })
              },
        getChat() {
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/Message/chat1.json')
                .then(response => {
                    this.textList = response.data
                    console.log(this.textList)
                    
                })
                .catch(error => {
                    console.log(error)
                })
        },
        toload(){
            this.getMyUserAxios()
            this.getPostAxios()
        },
        // ---------------------------------------------------------

        submitMSG(val) {
        // Parsing the data into firebase Realtime Database
        let key;
        push(dbRef(db, 'Message/chat1'), val)
            .then((data) => {
                // to get the key of the file                
                key = data.key;
                console.log("successful push of msg " + val);
                return key
            })
            .catch((error) => {
                console.log(error)
            })
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

    },
    created() {
      this.toload();
      this.id = this.$route.params.id;
      console.log(this.id);
      this.getChat();
    },

}
///////////////////////////////




</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}
.container { 
  margin-left: 75px; margin-right: 75px; margin-top: 5%; margin-bottom: 5%;
  height: 100%;
  justify-content: center;
}

@media (max-width: 600px) {
  .container { 
    margin: 0;
    margin-top: 17px;
    padding: 0;
    height: 100%;
  }
  .displayhide{
    display: none;
  }
}
@media (max-width: 450px) {
  .adjust { 
    width: 100px;
  }
}
.adjust{
  width:280px
}



</style>
