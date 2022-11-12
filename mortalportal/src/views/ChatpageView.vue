
<!-- xuen --> 
<template>

  <div class="back">
    <NavBar/>
    <!-- <div class="about">
      <h1> hellooo </h1>
      <h2 class="format1"> {{message}} </h2>
    </div> -->
  </div>



  <div class="container">
    <q-layout view="lHh Lpr lff" container class="shadow-2 rounded-borders" style="height: 100%">

      <q-drawer
        v-model="drawer"
        behavior="desktop"
        :width="290"
        :mini="miniState"
        :mini-width="160"
        mini-to-overlay="500"
        show-if-above
        :breakpoint="400"
        class="bg-blue-1 adjust"
        style="border-radius: 4px"
      >
          <q-list active-color="white" indicator-color="transparent" padding style="margin-top: 193px; border-right: 1px solid #ddd; text-align:left;">
            
            <template v-for="(value,key) in this.tempList" :key="key">
              <!-- <p> {{value}}</p> -->
              <!-- value is task id & key is chat id -->
              <template v-if="value.index == this.chatId">
                <q-item clickable v-ripple
                :active="tab === 'chat1'"
                active-class="text-green"
                @click="paramTask(value.task, value.index)" 
                style="padding:3%">
                      <q-item-section side style="width: 5rem;">
                        <q-avatar rounded size="4rem">
                          <img :src="value.taskPic" style="width:max-content"/>
                        </q-avatar>
                      </q-item-section>
                      <q-item-section>
                        <template v-if="value.userA == this.currUser">
                        <q-item-label>{{value.userB}}</q-item-label>
                      </template>
                      <template v-else>
                        <q-item-label>{{value.userA}}</q-item-label>
                      </template>
                        <q-item-label caption>{{value.title}}</q-item-label>
                      </q-item-section>
              </q-item>
              </template>
              <template v-else>
                <q-item clickable v-ripple @click="paramTask(value.task, value.index)" style="padding:3%">
                  <q-item-section side style="width: 5rem;">
                    <q-avatar rounded size="4rem">
                      <img :src="value.taskPic" style="width:max-content" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <template v-if="value.userA == this.currUser">
                      <q-item-label>{{value.userB}}</q-item-label>
                    </template>
                    <template v-else>
                      <q-item-label>{{value.userA}}</q-item-label>
                    </template>
                        <q-item-label caption>{{value.title}}</q-item-label>
                  </q-item-section>
              </q-item>
              </template>
            </template>
          </q-list>

        <!-- my profile -->
        <q-item class="absolute-top bg-blue-grey-2 justify-content-center" style="height: 200px; border: 1px solid; border-color:rgb(215, 215, 215); border-radius:5px; border-right: 1px solid #ddd;">
        <!-- <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 25vh"> -->
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="80px" color="secondary" text-color="white">{{myUsername.slice(0,1)}}</q-avatar>
            <!-- <div class="text-weight-bold">{{loginData.fName}} {{loginData.lName}} </div> -->
            <h6 style="margin:0;padding:0; margin-bottom:40px;">{{myUsername}}</h6>
          </div>
        <!-- </q-img> -->
      </q-item>
      </q-drawer>

      <q-page-container style="display:inherit;">
        <!-- <q-page padding> -->
  
          <!-- <q-scroll-area style="height: 80vh;" > -->
                  <q-tab-panels v-model="tab"  style=" height: calc(100vh - 78.17px)">
                    
                    
                    <q-tab-panel name="chat1" style="padding: 0;">
                      
                      <q-card>
                      <q-item class="bg-grey-3" style="margin:0%; border-radius:8px; text-align:left; font-style:italic; height:100px; text-align:left">
                        
                        <q-item-section side class="displayhide" style="height:max-content">
                          <img :src="posts.file" style="height:80px; display: block; margin: 5px; border-radius:2px">
                        </q-item-section>
                        <q-item-section>
                          <q-item-label >{{postUsername}}</q-item-label>
                          <q-item-label caption>{{postDesc}}</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                          <!-- <template v-if="postUsername == myUsername">
                            <q-item-label><q-btn flat icon="money" color="red" label="Take Offer"/></q-item-label>
                          </template>
                          <template v-else>
                            <q-item-label><q-btn flat icon="money" color="red" label="Make Offer"/></q-item-label>
                          </template> -->
                          <q-item-label><q-btn flat color="red" label="Back To Task" @click="toTask()"/></q-item-label>
                        </q-item-section>
                      
                      </q-item>
                    </q-card>
                      
                    <q-item style="height: calc(100vh - 78.17px - 100px - 80px); margin:0; margin-right:0; text-align:left">
                      <div class="q-ma-sm bg-grey-1" style="margin:0; border-radius:3%; width:100%; height:100% ">
                        <!-- for scroll area -->
                        <q-scroll-area class="fill-window" id="thisScroll" ref="scrollAreaComponent"  style="height: calc(100vh - 78.17px - 100px - 100px); text-align:left">
                          <div>
                          <!-- for chat -->
                              <ChatMsg :textList="textList" :myUsername="myUsername"/>
                            </div>
                              <q-scroll-observer />
                              
                        </q-scroll-area>
                        <q-btn push round class="absolute-bottom" style="margin: auto; width:20px; height:20px; margin-bottom:10px" color="accent" icon="arrow_downward" @click="scrollBtm()" />
                    </div>
                  </q-item>
              
                    <q-item class="absolute-bottom" style="max-width: 2000px;">
                    <!-- FOR INPUT OF TEXT -->
                    <q-input class="textinput" rounded outlined v-model="myMsg" placeholder="Send a Text Here" @keyup.enter="sendMessage()" style="margin: 10px; width:100%">
                      <template v-slot:after>
                        <q-btn round dense flat icon="send" @click="sendMessage()"/>
                      </template>
                    </q-input>
                  </q-item>



                    </q-tab-panel>
            
                    <q-tab-panel name="chat2" class="justify-content-center bg-grey-4" style="height: 100%; border: 2px solid; border-color:rgb(230, 230, 230); border-radius:5px">
                      <!-- <div class="text-h6">chat2</div> -->
                      <!-- <q-card class="justify-content-center text-center" style="height: 100%;">  -->
                        <h3 style="color: grey; font-family:Georgia, 'Times New Roman', Times, serif; font-style:italic; margin-bottom:0; margin-top:25%"> No Chats Selected</h3>
                        <h6 style="color: grey; font-family:Georgia, 'Times New Roman', Times, serif; font-style:italic; margin-top:0;">Please select a chat or look through some tasks!</h6>
                      <!-- </q-card> -->
                    </q-tab-panel>
            

                  </q-tab-panels>
          <!-- </q-scroll-area> -->

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

import { useQuasar } from 'quasar'
import { onBeforeUnmount } from 'vue'

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
            miniState: false,

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
            // count: 0,
            newchat: [],

            tempPost: {},
            tempTitle: '',
            tempList: [],
            finalLoop: [],
        }
    },
  setup () {

        const $q = useQuasar()
        let timer

        onBeforeUnmount(() => {
            if (timer !== void 0) {
                clearTimeout(timer)
                $q.loading.hide()
            }
        })


    return {
      drawer: ref(false),
      scrollAreaComponent: ref(),
      position: ref(),

      showLoading() {
                $q.loading.show()

                // hiding in 2s
                timer = setTimeout(() => {
                    $q.loading.hide()
                    this.submit = true
                    timer = void 0
                }, 3000)
    }
  }
},
  methods: {
    scrollBtm(){
      console.log(scrollAreaComponent.value)
      console.log(this.$refs.scrollAreaComponent.value)
      
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
        console.log(key)
        let key_string = key.toString().replace(/[:/^a-zA-Z ]/g, "")
        console.log(key_string)
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
                    date: new Date().toLocaleString('en-US')
                };
                console.log(new Date().toLocaleString('en-US'));
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
                setTimeout(() => {
                  this.$refs.scrollAreaComponent.setScrollPercentage('vertical',100);
                }, 2000);
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
        },
        getTitle(variable , variable2, count){
          axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/TaskData/' + variable + '.json')
                .then(response => {
                    let tempPost = response.data
                    console.log(tempPost)
                    // let tempTitle = tempPost.name
                    this.tempList[count]['title'] = tempPost.name
                    this.tempList[count]['userA'] = tempPost.username
                    this.tempList[count]['userB'] = tempPost.chats[variable2]
                    this.tempList[count]['taskPic'] = tempPost.file
                    // let tempUserA = tempPost.username
                    // let tempUserB = tempPost.chats[variable2]
                    // console.log(tempTitle + " " + tempUserA + " " + tempUserB)
                    // return tempTitle, tempUserA, tempUserB
                })
                
        },
        tablist(){
          var count = 0;
          for (var index in this.myChats){
            this.tempList[count] = {}
            this.tempList[count]['index'] = index
            this.tempList[count]['task'] = this.myChats[index]
            console.log(this.myChats[index])
            // var placeholder = {}
            // placeholder['userA'] = 
            // placeholder['index'] = index
            // placeholder['task'] = this.myChats[index]
            // console.log(this.getTitle(this.myChats[index], index ))
            // placeholder['title'] = this.getTitle(this.myChats[index])
            this.getTitle(this.myChats[index], index, count )
            // console.log(placeholder)
            // this.tempList.push(placeholder)
            count = count + 1
          }
          console.log("tablist called")
          console.log(this.tempList)
          // for (let each in this.tempList){
          //   console.log(this.tempList[each])
          // }
        },
        toTask(){
          this.$router.push({ name: 'Task Details', params: { id: this.$route.params.id, poster: this.postUsername} })
          // window.location.href = "http://localhost:8080/Task/" + this.$route.params.id
        },
      },
    mounted() {

    },
    created() {
      
      this.showLoading();
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
      
      setTimeout(() => {
        this.tablist();
      }, 1000);
    },

}
///////////////////////////////




</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}
#app{
  height: 100%;
}
.container { 
  /* margin-left: 75px; margin-right: 75px; ; margin-bottom: 5%;*/
  margin: 0;
  height: calc(100vh - 78.17px);
  justify-content: center;
}

@media (max-width: 690px) {
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
