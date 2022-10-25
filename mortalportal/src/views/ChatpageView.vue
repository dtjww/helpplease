
<!-- xuen --> 

<!-- <script>
import NavBar from '@/components/NavBar.vue'
export default {
  // component options
  // declare some reactive state here.
  data() {
    return {
      message: 'Hello World!',
      name: 'AboutView',
      components: {
        NavBar
      }

    }
  }
}
</script>

<template>
  <NavBar msg="This is my NavBar bro"/>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <h1>Make me dynamic!</h1>
  <h1>{{ message }}</h1>
  <h1>{{ message.split('').reverse().join('') }}</h1>
</template>

<style>
  .about {
    color: aqua;
  }
</style>
 -->

<template class="back">
  <div class="back">
  <NavBar msg="This is my NavBar bro"/>
  <!-- <div class="about">
    <h1> hellooo </h1>
    <h2 class="format1"> {{message}} </h2>
  </div> -->
</div>



<!-- ---------------------------------------- -->
<div id="q-app" style="min-height: 100vh;">
  <div class="q-pa-md container">

    <div class="row justify-center">
      <div class="col-12 col-sm-3 bg-pink-3" style="border-radius:7px; ">
        Angel | Mortal <br>
        Angel | Mortal <br>
        Angel | Mortal <br>
        Angel | Mortal <br>
      </div>
      <div class="col-sm-8 col-12 bg-pink-1" style="border-radius:7px; text-align:left;">
        <q-item style="height: 150px;">
          <q-item-section side>
            <q-avatar rounded size="100px">
              <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Mary</q-item-label>
            <q-item-label caption>This is my profile</q-item-label>
          </q-item-section>
          <q-item-section side>
            smth here
          </q-item-section>
        </q-item>
      </div>
    </div>


    <div class="row justify-center">
      <div class="col-sm-11 col-12" style="background:#b56576; border-radius:7px; margin:2px" >
        
          <div>
            <q-splitter v-model="splitterModel" style="height: auto" limits="[30,70]">
              <template v-slot:before>
                <q-tabs
                  v-model="tab"
                  vertical
                  inline-label
                  class="text-white"
                >
                  <q-tab name="chat1" icon="mail" label="Person A"> <q-item-label caption>hellooo</q-item-label></q-tab> 
                  <q-tab name="chat2" icon="mail" label="Person B" alert/> 
                </q-tabs>
              </template>
            
              <template v-slot:after>
                <q-tab-panels
                  v-model="tab"
                  animated
                  vertical
                  transition-prev="jump-up"
                  transition-next="jump-up"
                  class="bg-deep-purple-1"
                  style="border-radius: 0 7px 7px 0;"
                >
                  <!-- FIRST TAB - PERSON A CHAT -->
                  <q-tab-panel name="chat1">

                      <q-item class="bg-pink-1" style="margin:0%; border:solid red 2px; border-radius:7px; text-align:left">
                        <q-item-section>
                          <q-item-label overline>LIST TASK HERE</q-item-label>
                          <q-item-label caption>author??</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                          <q-item-label>Task button here</q-item-label>
                        </q-item-section>
                      </q-item>

                      <div class="q-ma-md">
                          <!-- for scroll area -->
                          <q-scroll-area v-model="scrollAreaRef" style="height: 300px; max-width: auto;">
                              <!-- for chat -->
                              <!-- <ChatMsg class="textinput2"></ChatMsg> -->

                              <div class="bg-bg-deep-purple-1 back">
                                <q-chat-message
                                label='Sunday, 19th'
                                style="font-size: 60px; font-weight: bold;"
                                />
                        
                                <q-chat-message
                                name="me"
                                avatar="https://cdn.quasar.dev/img/avatar1.jpg"
                                :text="['eh bojio']"
                                stamp="12:30"
                                sent
                                />
                        
                                <q-chat-message
                                name="Jane"
                                avatar="https://cdn.quasar.dev/img/avatar2.jpg"
                                :text="['dont liddat ah', 'i sumpah not doing anything']"
                                stamp="12:32"
                                />
                                <q-chat-message
                                name="me"
                                avatar="https://cdn.quasar.dev/img/avatar1.jpg"
                                :text="['eh bojio agn fr']"
                                stamp="12:34"
                                sent
                                />
                              

                                <template v-for="text in this.textList" v-bind:key="text">
                                  <q-chat-message
                                  name="me"
                                  avatar="https://cdn.quasar.dev/img/avatar1.jpg"
                                  :text="[text]"
                                  stamp="12:34"
                                  sent
                                  />
                                  <q-chat-message
                                  name="Jane"
                                  avatar="https://cdn.quasar.dev/img/avatar2.jpg"
                                  >
                                  <q-spinner-dots size="2rem" />
                                  </q-chat-message>

                                </template>
                            </div>

                          </q-scroll-area>
                      </div>
                
            
                      <!-- FOR INPUT OF TEXT -->
                      <q-input class="textinput" rounded outlined v-model="text" placeholder="Send a Text Here" @keyup.enter="dothis()">
                        <template v-slot:after>
                          <q-btn round dense flat icon="send" @click="dothis()"/>
                        </template>
                      </q-input>
            
            
                  </q-tab-panel>
                  
                  <!-- SECOND TAB - PERSON B -->
                  <q-tab-panel name="chat2">
                    <div class="text-h4 q-mb-md">chat2</div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                  </q-tab-panel>
            
                </q-tab-panels>
              </template>
          
            </q-splitter>
          </div>
      </div>
    </div>
<!-- ---------------------------------------- -->

  </div>
</div>



  



</template>

<script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'
  // import ChatMsg from '@/components/ChatMsg.vue'
  import { ref } from 'vue'
  
  // import { scroll } from 'quasar';
  // const { setVerticalScrollPosition } = scroll
  // var offset = 0;
  // var scrollTargetElement = null; 

  // // Setting scroll position of an element or page:
  // setVerticalScrollPosition (scrollTargetElement, offset)
  // // if "duration" is specified then it will animate the scrolling

  export default {
    name: 'AboutView',
    components: {
    NavBar
    // ChatMsg
    },
  setup () {
      return {
        tab: ref('chat1'),
        splitterModel: ref(27.3),

      }
    },
  data() {
      return {
        message: 'successfully passing data',
        message2: 'hellooo',
        text: '',
        textList: []
      }
  },
  methods: {   
    dothis(){
      // alert("go to else");
      console.log(this.text);
      this.textList.push(this.text);
      this.text = '';
      console.log(this.textList);
      // setVerticalScrollPosition(this.scrollAreaRef, 1000);
          }
    }
  }
</script>

<style>
.format1 {
  margin-left: 20px;
  margin-right: 20px;
  color: aqua;
  background-color: beige;
  border:solid black 1px;
  border-radius: 5%;
}
.back{
  height: max-content;
  width: auto;
  text-align: left;
}
.textformat{
  color: darkgray;
}
.textinput{
  height: auto;
  width: auto;
  margin-left: 3%;
  margin-right: 1%;
  margin-bottom: 10px;
}
.textinput2{
  height: auto;
  width: auto;
  margin-left: 6%;
  margin-right: 10%;
  margin-bottom: 10px;
  text-align: left;
}
@media (max-width: 600px) {
  .container { 
    margin: 0;
    margin-top: 17px;
    padding: 0;
  }
}

</style>