<!-- Ban -->
<template>
  <NavBar />
  <div class="q-pa-md">
    <q-layout view="lHh Lpr lff" container style="height: 600px" class="shadow-2 rounded-borders">

      <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
        <q-list class="menu-list" v-model="tab" style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
          padding>

          <q-item clickable v-ripple :active="tab === 'MyAccount'" @click="tab = 'MyAccount'" >
            <q-item-section avatar>
              <q-icon name="face 6" />
            </q-item-section>

            <q-item-section>
              My Account
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple :active="tab === 'MyTasks'" @click="tab = 'MyTasks'"
            >
            <q-item-section avatar>
              <q-icon name="assignment" />
            </q-item-section>

            <q-item-section>
              My Tasks
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple :active="tab === 'MyEarnings'" @click="tab = 'MyEarnings'"
            >
            <q-item-section avatar>
              <q-icon name="money" />
            </q-item-section>

            <q-item-section>
              My Earnings
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple :active="tab === 'MyChats'" @click=gotoChats
            >
            <q-item-section avatar>
              <q-icon name="chat" />
            </q-item-section>

            <q-item-section>
              My Chats
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>

            <q-item-section @click=gotoHome>
              Logout
            </q-item-section>
          </q-item>

        </q-list>
        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="66px" class="q-mb-sm" color="primary"> {{getUsername().slice(0,1)}}
            </q-avatar>
            <div class="text-weight-bold"> {{loginData.name}} </div>
            <div>@{{loginData.username}}</div>
          </div>
        </q-img>

      </q-drawer>

      <q-page-container>
        <q-card-section>
          <q-tab-panels v-model="tab">
            
            <q-tab-panel name="MyAccount">
              <div class="q-pa-md">
                <q-header elevated>
                    <q-toolbar>
                      <q-icon name="face 6" size="4rem" />
                      <q-toolbar-title> My Account </q-toolbar-title>                    
                    </q-toolbar>                    
                </q-header>                
                <MyAccount />
                
                <q-page class="q-pa-md bg-grey-2 ">
                  <q-card class="bg-white q-ml-sm shadow-11">
                    <q-card-section>
                      <div class="text-h6 text-grey-8 text-weight-bold">
                        Summarised Earnings
                        <q-select outlined v-model="selected_product"
                                  class="bg-white float-right q-mb-sm " style="width:300px;"
                                  :options="product_options" label="Select Product"/>
                      </div>
                    </q-card-section>
                    <q-card-section class="q-pa-none map_height">
                      <IEcharts :option="getBarChartOptions" :resizable="true"/>
                    </q-card-section>
                  </q-card>
                </q-page>
              </div>        
            </q-tab-panel>

            <q-tab-panel name="MyTasks">
              <div class="q-pa-md">
                <q-header elevated>
                    <q-toolbar>
                      <q-icon name="assignment" size="4rem"/>
                      <q-toolbar-title> My Tasks </q-toolbar-title>                    
                    </q-toolbar>                    
                </q-header>                
                <MyTask />
              </div>              
            </q-tab-panel>

            <q-tab-panel name="MyEarnings">
              <div class="q-pa-md">
                <q-header elevated>
                    <q-toolbar>
                      <q-icon name="money" size="4rem"/>
                      <q-toolbar-title> My Earnings </q-toolbar-title>                    
                    </q-toolbar>                    
                </q-header>     
                <!-- add earnings component here -->
                <!--  <MyEarnings /> -->
              </div>              
            </q-tab-panel>


          </q-tab-panels>
        </q-card-section>        
      </q-page-container>
    </q-layout>
    
  </div>

</template>
  
<script>
import NavBar from '@/components/NavBar.vue';
import MyAccount from '@/components/MyAccount.vue';
import MyTask from '@/components/MyTask.vue';
import { ref } from 'vue';
import IEcharts from 'vue3-echarts-v3/src/full.js';
import axios from 'axios';
import { useCounterStore } from "@/store/store";
const storeName = useCounterStore();

export default {
  name: 'ProfileView',
  props: {

  },
  components: {
    NavBar,
    MyAccount,
    MyTask,
    IEcharts,
  },
  data(){
    return{
      tab: 'MyAccount',
      selected_product: 'Past Month',
      data: [
          // {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
          // {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
          // {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
          // {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1},
      ],
      product_options: ['Past Month', 'Past 3 Months', 'Past 6 Months', 'Past Year', ],
      loginData: {},
    }
  },
  setup() {

    return {
      NavBar,
      drawer: ref(false),
    }
  },
  methods: {
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
    

    getOffer() {
      var offer = 0;
      var earningsByMonth = {};
      var allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', "August", 'September', 'October', 'November', 'December'];
      axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/Login/' + storeName.username + '/tasksInteracted/active.json')
      .then(response => {
        this.tasks = response.data
        for (var task in this.tasks) {
          offer = 0;
          console.log(this.tasks[task]);
          if (this.tasks[task].status == 'completed'){
            var date = this.tasks[task].dateCompleted.split("/"); 
            console.log(date);
          }
          var month = Number(date[1]);
          for (var i in Range(1, 13)){
            if (month == i){
              if (allMonths[i] in earningsByMonth){
                earningsByMonth[allMonths[i]] += Number(this.tasks[task].offer);
              }
              else{
                earningsByMonth[allMonths[i]] = Number(this.tasks[task].offer);
              }
            }
          }
        }
        console.log(earningsByMonth);
        this.data = [{product: 'Past Month', '2015': offer},
        {product: 'Past 3 Months', '2015': offer},
        {product: 'Past 6 Months', '2015': offer},
        {product: 'Past Year', '2015': offer}];
      })
      .catch(error => {
        console.log(error)
      })
      return offer;
    }
  },
  computed: {
  getBarChartOptions() {
        let self = this;

        let filtered_data = this.data.filter(function (item) {
            return item['product'] == self.selected_product;
        });
        return {
            grid: {
                bottom: '25%'
            },
            xAxis: {
                type: 'category',
                axisLabel: {},
                nameLocation: "middle",
                nameGap: 78,
            },
            tooltip: {},
            dataset: {
                dimensions: ['product', '2015'],
                source: filtered_data
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: false
                }
            }, series: [
                {type: 'bar'},
            ]
        }
    },
  },
  created() {
    this.getOffer();
    this.getUserData();
  },
}

</script>

<style lang="sass" scoped>
.echarts 
  width: 400px
  height: 400px

.menu-list .q-item
  border-radius: 0 32px 32px 0
</style>