
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
  <div class="bg-blue-grey-1 back">
  <NavBar msg="This is my NavBar bro"/>
  <!-- <div class="about">
    <h1> hellooo </h1>
    <h2 class="format1"> {{message}} </h2>
  </div> -->
</div>



<!-- ---------------------------------------- -->
<div id="q-app" style="min-height: 100vh;">
  <div class="q-pa-md">

    <div class="row justify-center">
      <div class="col-3 bg-pink-3">
        insert profile here here
      </div>
      <div class="col-8 bg-pink-1">
        HELLO
      </div>
    </div>


    <div class="row justify-center">
      <div class="col-11" style="background:#b56576">
        
          <div>
            <q-splitter v-model="splitterModel" style="height: auto" limits="[30,70]">
              <template v-slot:before>
                <q-tabs
                  v-model="tab"
                  vertical
                  inline-label
                  class="text-white"
                  style="width='500px'"
                >
                  <q-tab name="chat1" icon="mail" label="Person A" />
                  <q-tab name="chat2" icon="mail" label="Person B" />
                </q-tabs>
              </template>
            
              <template v-slot:after>
                <q-tab-panels
                  v-model="tab"
                  animated
                  swipeable
                  vertical
                  transition-prev="jump-up"
                  transition-next="jump-up"
                  class="bg-deep-purple-1"
                >
                  <q-tab-panel name="chat1">
                
                      <div class="q-ma-md">
                          <!-- for scroll area -->
                          <q-scroll-area style="height: 300px; max-width: auto;">
                              <!-- for chat -->
                              <ChatMsg class="textinput2"></ChatMsg>
                          </q-scroll-area>
                      </div>
                
            
                      <!-- for  -->
                      <q-input class="textinput" rounded outlined v-model="text" placeholder="Send a Text Here">
                        <template v-slot:after>
                          <q-btn round dense flat icon="send" @click="dothis()"/>
                        </template>
                      </q-input>
            
            
                  </q-tab-panel>
            
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
  import ChatMsg from '@/components/ChatMsg.vue'
  import { ref } from 'vue';

  export default {
    name: 'AboutView',
    components: {
    NavBar,
    ChatMsg
},
  setup () {
      return {
        tab: ref('chat1'),
        splitterModel: ref(27.3)
      }
    },
    data() {
        return {
          message: 'successfully passing data',
          message2: 'hellooo'
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
</style>