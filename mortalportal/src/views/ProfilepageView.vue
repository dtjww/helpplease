<!-- Ban -->
<template>
  <NavBarWhite />
  <div class="q-pa-none karla">
    <q-layout view="lHh Lpr lff" container style="height: 86vh" class="shadow-2 rounded-borders">

      <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
        <q-list class="menu-list bg-teal-1" v-model="tab" style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
          padding>

          <q-item clickable v-ripple :active="tab === 'MyAccount'" @click="tab = 'MyAccount'" active-class="text-secondary">
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>

            <q-item-section >
              Account
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple :active="tab === 'MyTasks'" @click="tab = 'MyTasks'" active-class="text-secondary"
            >
            <q-item-section avatar>
              <q-icon name="assignment" />
            </q-item-section>

            <q-item-section>
              Tasks
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple :active="tab === 'MyEarnings'" @click="tab = 'MyEarnings'" active-class="text-secondary" 
            >
            <q-item-section avatar>
              <q-icon name="account_balance_wallet" />
            </q-item-section>

            <q-item-section>
              Earnings
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple >
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>

            <q-item-section @click=gotoHome>
              Logout
            </q-item-section>
          </q-item>

        </q-list>
        <!-- <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px"> -->
          <q-item class="absolute-top bg-teal-1" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="66px" class="q-mb-sm font" color="white">{{getUsername().slice(0,1)}}</q-avatar>
            <!-- <q-avatar size="66px" class="q-mb-sm" color="accent"> {{getUsername().slice(0,1)}}
            </q-avatar> -->
            <div class="text-weight-bold"> {{loginData.name}} </div>
            <div>@{{loginData.username}}</div>
          </div>
        </q-item>
        <!-- </q-img> -->

      </q-drawer>

      <q-page-container>
        <q-card-section>
          <q-tab-panels v-model="tab">
            
            <q-tab-panel name="MyAccount">
              <div class="q-pa-sm">
                <q-header elevated>
                </q-header>                
                <MyAccount />                
              </div>        
            </q-tab-panel>

            <q-tab-panel name="MyTasks">
              <div class="q-pa-none">
                <q-header elevated>              
                </q-header>                
                <MyTask />
              </div>              
            </q-tab-panel>

            <q-tab-panel name="MyEarnings">
              <div class="q-pa-sm">
                <q-header elevated>              
                </q-header>     
                <MyEarnings />
                <!-- :key="componentKey" -->
              </div>              
            </q-tab-panel>


          </q-tab-panels>
        </q-card-section>        
      </q-page-container>
    </q-layout>
    
  </div>

</template>
  
<script>
import NavBarWhite from '@/components/NavBarWhite.vue';
import MyAccount from '@/components/MyAccount.vue';
import MyTask from '@/components/MyTask.vue';
import MyEarnings from '@/components/MyEarnings.vue';
import { ref } from 'vue';
import axios from 'axios';
import { useCounterStore } from "@/store/store";
const storeName = useCounterStore();
// const componentKey = ref(0);
export default {
  name: 'ProfileView',
  props: {},
  components: {
    NavBarWhite,
    MyAccount,
    MyTask,
    MyEarnings,
  },
  data(){
    return{
      tab: 'MyAccount',
      selected_product: 'Past Month',
      toPass: [],
      data: [],
      abc : [{product: 'Past Month', 'January': 324}, 
      {product: 'Past 3 Months', 'January': 324, 'February': 112, 'March': 90},
      {product: 'Past 6 Months', 'January': 324, 'February': 112, 'March': 90, 'April': 985, 'May': 555, 'June': 123},
    ],
      product_options: ['Past Month', 'Past 3 Months', 'Past 6 Months', 'Past Year', ],
      loginData: {},
    }
  },
  setup() {

    return {
      NavBarWhite,
      drawer: ref(false),
      active: ref(true)
    }
  },
  methods: {
    // forceRerender() {
    //   this.componentKey += 1;
    // },
    gotoHome() {
      this.$router.push('/')
    },

    gotoChats() {
      this.$router.push('/chat')
    },
    getUserData() {
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/Login/' + storeName.username + '.json')
                .then(response => {
                    console.log(response.data)
                    this.loginData = response.data
                })
                .catch(error => {
                    console.log(error)
                })
    },
    getUsername(){
      this.myUsername = storeName.username
      return this.myUsername
    },    
  },
  
  created() {
    this.getUserData();
  },
}

</script>
<style>

.font {
  font-family: radley;
  font-weight: bold;
}

.karla {
    font-family: karla;
}

@import url("https://fonts.googleapis.com/css?family=Karla");
</style>
<style lang="sass" scoped>
.menu-list .q-item
  border-radius: 0 32px 32px 0

</style>