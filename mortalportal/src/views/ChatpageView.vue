
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
            
            <template v-for="(value,key) in this.myChats" :key="key">
              <!-- <p> {{getTitle(value)}}</p> -->
              <template v-if="key == this.chatId">
                <q-item clickable v-ripple
                :active="tab === 'chat1'"
                @click="paramTask(value, key)" >
                      <q-item-section side>
                        <q-avatar rounded size="48px">
                          <img src="https://cdn.quasar.dev/img/avatar.png" />
                        </q-avatar>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>{{value}}</q-item-label>
                        <q-item-label caption>{{key}}</q-item-label>
                      </q-item-section>
              </q-item>
              </template>
              <template v-else>
                <q-item clickable v-ripple @click="paramTask(value, key)">
                  <q-item-section side>
                    <q-avatar rounded size="48px">
                      <img src="https://cdn.quasar.dev/img/avatar.png" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>{{value}}</q-item-label>
                    <q-item-label caption>{{key}}</q-item-label>
                  </q-item-section>
          </q-item>
              </template>
                  
                          
            </template>
            <!-- <template v-for="(value,key) in this.tempList" :key="key">
              <p>{{value}}</p>
              <p>{{key}}</p>
            </template> -->
            <!-- first chat -->
            <q-item clickable v-ripple
            :active="tab === 'chat1'"
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
                      <!-- not always postUsername -->
                      <q-item-label>{{postUsername}}</q-item-label>
                      <q-item-label caption>{{postTitle}}</q-item-label>
                    </q-item-section>

            </q-item>

            <!-- second chat -->
            <!-- <q-item clickable v-ripple
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
            </q-item> -->

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
  
          <q-scroll-area style="height: 520px;" >
                  <q-tab-panels v-model="tab" style="height: 520px;">
                    
                    
                    <q-tab-panel name="chat1">
                      <div class="text-h6 bg-pink-1">{{postUsername}}</div>

                      <q-item class="bg-pink-1" style="margin:0%; border:solid red 2px; border-radius:7px; text-align:left">
                        <q-item-section side class="displayhide">
                          <img :src="posts.file" style="height:40px">
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>{{postDesc}}</q-item-label>
                          <!-- <q-item-label caption>{{postUsername}}</q-item-label> -->
                        </q-item-section>
                        <q-item-section side>
                          <template v-if="postUsername == myUsername">
                            <q-item-label><q-btn flat icon="money" color="red" label="Take Offer"/></q-item-label>
                          </template>
                          <template v-else>
                            <q-item-label><q-btn flat icon="money" color="red" label="Make Offer"/></q-item-label>
                          </template>
                          
                        </q-item-section>
                      </q-item>

                      <div class="q-ma-sm bg-grey-1" style="padding:5px; border-radius:3%">
                        <!-- for scroll area -->
                        <q-scroll-area id="thisScroll" ref="scrollAreaComponent" @onload="scrollBtm()" style="height: 320px; max-width: auto; text-align:left">
                          <!-- for chat -->
                              <ChatMsg :textList="textList" :myUsername="myUsername"/>
                              <q-scroll-observer @scroll="onScroll()" />
                        </q-scroll-area>
                    </div>
              
          
                    <!-- FOR INPUT OF TEXT -->
                    <q-input class="textinput" rounded outlined v-model="myMsg" placeholder="Send a Text Here" @keyup.enter="sendMessage()">
                      <template v-slot:after>
                        <q-btn round dense flat icon="send" @click="sendMessage()"/>
                      </template>
                    </q-input>

                    </q-tab-panel>
            
                    <q-tab-panel name="chat2">
                      <!-- <div class="text-h6">chat2</div> -->
                      <q-card> <h2> Oi please choose chat leh wtf</h2></q-card>
                    </q-tab-panel>
            

                  </q-tab-panels>
          </q-scroll-area>

        <!-- </q-page> -->
      </q-page-container>
    </q-layout>
<!-- 
    <template v-for="chatIndx in this.myChats" :key="chatIndx">
      <p> {{chatIndx}}</p>
    </template>
    -->
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
import { useCounterStore } from "@/store/store";
const storeName = useCounterStore()

const scrollAreaComponent = ref();

// const chatId = this.randomload()
// console.log(chatId)

export default {
  name: 'ChatpageView',
      components: {
    NavBar,
    ChatMsg
},
  data () {
        return {
            tab: 'chat1', //should be the id passed in for which chat it is 

            username: '',
            messages: [],
            text: '',

            id: '',
            chatId: '',

            loginData: {},
            myEmail: "",
            myUsername: "",
            myPassword: "",
            myTasks: "",
            myChats: [],
            chatIndx: 0,

            currUser: storeName.username,

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

            textList: {},
            count: 0,
            newchat: [],

            tempPost: {},
            tempTitle: '',
            tempList: [],
        }
    },
  setup () {
    return {
      drawer: ref(false),
      scrollAreaComponent: ref(),
      position: ref(),
    }
  },
  methods: {
    scrollBtm(){
      console.log(scrollAreaComponent.value)
      this.$refs.scrollAreaComponent.setScrollPercentage('vertical',100);
    },
    onScroll(){
      // console.log(this.$refs.scrollAreaComponent)
    },
    currentSession(){
      console.log("currentSession")
      console.log(storeName.username);
    },
      getMyUserAxios() {
          axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/Login/'+ this.currUser +'.json')
              .then(response => {
                  console.log("called getMyUser")
                  console.log(response.data)
                  this.loginData = response.data
                  this.myUsername = response.data.username
                  this.myEmail = response.data.email
                  this.myPassword = response.data.password
                  this.myTasks = response.data.tasksInteracted
                  this.myChats = response.data.chats
                  console.log(response.data.tasksInteracted)
              })
              .catch(error => {
                  console.log(error)
              })
      },
      getPostAxios() {
            this.id = this.$route.params.id
            // this.id = "-NF4gATFY3s-fUocXHLp"
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
                })
                .catch(error => {
                    console.log(error)
                })
              },
        getChat() {
          if (this.$route.params.chatid != null) {
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/Message/'+ this.$route.params.chatid + '.json')
                .then(response => {
                    this.textList = response.data
                    console.log(this.textList)
                    
                })
                .catch(error => {
                    console.log(error)
                })
              }
        },
        toload(){
            this.getMyUserAxios()
            this.getPostAxios()
        },
        // ---------------------------------------------------------

        submitMSG(val) {
        // Parsing the data into firebase Realtime Database
        if (this.$route.params.chatid != null) {
        let key;
        key = new Date()
        let key_string = key.toString().replace(/[:/^a-zA-Z ]/g, "")
        key_string = key_string.slice(0,-7)
        console.log(key_string)
        // set(dbRef(db, 'Message/' + this.$route.params.chatid + '/' + key_string ), val)
        push(dbRef(db, 'Message/' + this.$route.params.chatid), val)
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
          }
        },
        
        sendMessage() {
            // e.preventDefault();
            console.log("called sendMessage");
            if (this.myMsg != "") {
                console.log(this.myUsername);
                console.log(this.myMsg);
                const message = {
                    username: this.myUsername,
                    text: this.myMsg,
                    date: new Date().toLocaleString()
                };
                console.log(new Date().toLocaleString());
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
                this.scrollBtm();
            }
        },
        chatRefresh() {
          if (this.$route.params.chatid != null) {
            const chatRef = dbRef(db, "Message/" + this.$route.params.chatid);
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
          }
        },
        // getTitle(variable){
        //   axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/TaskData/' + variable + '.json')
        //         .then(response => {
        //             this.tempPost = response.data
        //             this.tempTitle += this.tempPost.name
        //         })
        //     return this.tempTitle
        // },
        // tablist(){
        //   for (var index in this.myChats){
        //     var placeholder = {}
        //     placeholder['index'] = index
        //     placeholder['task'] = this.myChats[index]
        //     console.log(placeholder)
        //     placeholder["title"] = this.getTitle(this.myChats[index])
        //     this.tempList += placeholder
        //   }
        //   console.log("tablist called")
        //   console.log(this.tempList)
        // },
        paramTask(id, chatid){
          this.$router.push({ name: 'Chat', params: { id: id, chatid: chatid} })
          console.log(window.location.href)
          window.location.href = "http://localhost:8080/Chat/" + id + '/' + chatid
          // window.location.href = this.$route.fullPath
        },
        doTab(){
          console.log("called doTab")
          console.log(this.chatId)
          if (this.chatId == ""){
            this.tab = "chat2"
          }
          
        }
      },
      computed:{
      // randomload(){
      //   for (let eachVal in this.myChats){
      //           console.log(eachVal)
      //           console.log(this.myChats[eachVal])
      //           // if(this.myChats[eachVal] == this.id){
      //           //     console.log("found my chat")
      //           //     console.log(eachVal + " this is the chat to retrieve")
      //           //     return eachVal
      //           // }
      //       }
      //     return 'none'
      // }
      },
    mounted() {
      this.toload();
      // console.log(this.$route)
      console.log(this.$route.params.id)
      this.id = this.$route.params.id;
      this.chatId = this.$route.params.chatid;
      console.log(this.id);
      console.log(this.$route.params.chatid)
      this.currentSession();
      this.getChat();
      this.doTab();
      // this.tablist();
    },
    created() {

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
