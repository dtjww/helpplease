
<!-- xuen --> 
<template>

  <div class="back">
    <NavBar msg="This is my NavBar bro"/>
    <!-- <div class="about">
      <h1> hellooo </h1>
      <h2 class="format1"> {{message}} </h2>
    </div> -->
  </div>



  <div class="q-mt-xl container">
    <q-layout view="lHh Lpr lff" container class="shadow-2 rounded-borders" style="height: 520px">

      <q-drawer
        v-model="drawer"
        width="280"
        show-if-above
        :breakpoint="350"
        class="bg-light-blue-1"
      >
          <q-list padding style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd; text-align:left;">
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
        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">{{loginData.fName}} {{loginData.lName}} </div>
            <div>{{loginData.username}}</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
        <!-- <q-page padding> -->
          <q-scroll-area style="height: 520px;">
                  <q-tab-panels v-model="tab" style="height: calc(100% - 150px);">
                    <q-tab-panel name="chat1">
                      <div class="text-h6">chat1</div>
                      <p v-for="n in 13" :key="n">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
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
          </q-scroll-area>
        <!-- </q-page> -->
      </q-page-container>



    </q-layout>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import { ref } from 'vue'
import axios from 'axios';

export default {
  name: 'ChatpageView',
      components: {
      NavBar
      },
  data () {
        return {
            tab: 'chat1',
            loginData: {}
        }
    },
  setup () {
    return {
      drawer: ref(false)
    }
  },
  methods: {
        getPost() {
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/Login/user1.json')
                .then(response => {
                    console.log(response.data)
                    this.loginData = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
    }
    ,
    created() {
        this.getPost();
    },

}
///////////////////////////////




</script>

<style>
.container { 
  margin-left: 75px; margin-right: 75px;
  height: 100%;
}

@media (max-width: 600px) {
  .container { 
    margin: 0;
    margin-top: 17px;
    padding: 0;
    height: 100%;
  }
}



</style>
