<!-- Ban -->
<template>
  <NavBar />
  <div class="q-pa-none">
    <q-layout view="lHh Lpr lff" container style="height: 90.5vh" class="shadow-2 rounded-borders">

      <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
        <q-list class="menu-list" v-model="tab" style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
          padding>

          <q-item clickable v-ripple :active="tab === 'MyAccount'" @click="tab = 'MyAccount'">
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>

            <q-item-section>
              Account
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple :active="tab === 'MyTasks'" @click="tab = 'MyTasks'"
            >
            <q-item-section avatar>
              <q-icon name="assignment" />
            </q-item-section>

            <q-item-section>
              Tasks
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple :active="tab === 'MyEarnings'" @click="tab = 'MyEarnings'"
            >
            <q-item-section avatar>
              <q-icon name="account_balance_wallet" />
            </q-item-section>

            <q-item-section>
              Earnings
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple :active="tab === 'MyChats'" @click=gotoChats
            >
            <q-item-section avatar>
              <q-icon name="question_answer" />
            </q-item-section>

            <q-item-section>
              Chats
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
            <q-avatar size="66px" class="q-mb-sm" color="accent"> {{getUsername().slice(0,1)}}
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
                </q-header>                
                <MyAccount />
                
                
                  <q-card class="bg-white q-ml-sm shadow-11">
                    <q-card-section>
                      <div class="text-h5 text-black-8 text-weight-bold">
                        Summarised Earnings
                        <q-select outlined v-model="selected_product"
                                  class="bg-white float-right q-mb-sm " style="width:200px;"
                                  :options="product_options" label="Select Duration"/>
                      </div>
                    </q-card-section>
                    <q-card-section class="q-pa-none map_height" style="height:500px;">
                      <IEcharts :option="getBarChartOptions" :resizable="true"/>
                    </q-card-section>
                  </q-card>
              
              </div>        
            </q-tab-panel>

            <q-tab-panel name="MyTasks">
              <div class="q-pa-md">
                <q-header elevated>              
                </q-header>                
                <MyTask />
              </div>              
            </q-tab-panel>

            <q-tab-panel name="MyEarnings">
              <div class="q-pa-md">
                <q-header elevated>              
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
  props: {},
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
      // pastMonth1: past12Months[0],
      // pastMonth2: past12Months[1],
      // pastMonth3: past12Months[2],
      // pastMonth4: past12Months[3],
      // pastMonth5: past12Months[4],
      // pastMonth6: past12Months[5],
      // pastMonth7: past12Months[6],
      // pastMonth8: past12Months[7],
      // pastMonth9: past12Months[8],
      // pastMonth10: past12Months[9],
      // pastMonth11: past12Months[10],
      // pastMonth12: past12Months[11],
      data: [],
      abc : [{product: 'Past Month', 'January': 324}, 
      {product: 'Past 3 Months', 'January': 324, 'February': 112, 'March': 90},
      {product: 'Past 6 Months', 'January': 324, 'February': 112, 'March': 90, 'April': 985, 'May': 555, 'June': 123},
    ],
        // {product: 'Past Month', pastmonth1: earningsByMonth[past12Months[0]]},
        
          // {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
          // {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
          // {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
          // {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1},
      // ],
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
          if (this.tasks[task].status == 'completed'){
            var date = this.tasks[task].dateCompleted.split("/");  
            for (let i = 0; i < allMonths.length; i++){
              var month = Number(date[1]);
              if ((month - 1) == i){
                if (allMonths[i] in earningsByMonth){
                  earningsByMonth[allMonths[i]] += Number(this.tasks[task].offer);
                }
                else{
                  earningsByMonth[allMonths[i]] = Number(this.tasks[task].offer);
                }
              }
            }
          }
        }
        const today = new Date();
        let currentMonth = today.getMonth() + 1;

        var past12Months = [];
        for (let i = 0; i < 12; i++){
          if (currentMonth == 0){
            currentMonth = 12;
          }
          past12Months.push(allMonths[currentMonth - 1]);
          currentMonth -= 1;
        }

        var past3Months = [];
        for (let i = 0; i < 3; i++){
          past3Months.push(past12Months[i]);
        }

        var past6Months = [];
        for (let i = 0; i < 6; i++){
          past6Months.push(past12Months[i]);
        }

        var pastMonth1 = past12Months[0];
        var pastMonth2 = past12Months[1];
        var pastMonth3 = past12Months[2];
        var pastMonth4 = past12Months[3];
        var pastMonth5 = past12Months[4];
        var pastMonth6 = past12Months[5];
        var pastMonth7 = past12Months[6];
        var pastMonth8 = past12Months[7];
        var pastMonth9 = past12Months[8];
        var pastMonth10 = past12Months[9];
        var pastMonth11 = past12Months[10];
        var pastMonth12 = past12Months[11];
        this.data = [{product: 'Past Month', pastMonth1: [past12Months[0], earningsByMonth[pastMonth1]] },
        {product: 'Past 3 Months', pastMonth1: [past12Months[0], earningsByMonth[pastMonth1]], pastMonth2: [past12Months[1], earningsByMonth[pastMonth2]], pastMonth3: [past12Months[2], earningsByMonth[pastMonth3]]},
        {product: 'Past 6 Months', pastMonth1: [past12Months[0], earningsByMonth[pastMonth1]], pastMonth2: [past12Months[1], earningsByMonth[pastMonth2]], pastMonth3: [past12Months[2], earningsByMonth[pastMonth3]], pastMonth4: [past12Months[3], earningsByMonth[pastMonth4]], pastMonth5: [past12Months[4], earningsByMonth[pastMonth5]], pastMonth6: [past12Months[5], earningsByMonth[pastMonth6]]},
        {product: 'Past Year', pastMonth1: [past12Months[0], earningsByMonth[pastMonth1]], pastMonth2: [past12Months[1], earningsByMonth[pastMonth2]], pastMonth3: [past12Months[2], earningsByMonth[pastMonth3]], pastMonth4: [past12Months[3], earningsByMonth[pastMonth4]], pastMonth5: [past12Months[4], earningsByMonth[pastMonth5]], pastMonth6: [past12Months[5], earningsByMonth[pastMonth6]], pastMonth7: [past12Months[6], earningsByMonth[pastMonth7]], pastMonth8: [past12Months[7], earningsByMonth[pastMonth8]], pastMonth9: [past12Months[8], earningsByMonth[pastMonth9]], pastMonth10: [past12Months[9], earningsByMonth[pastMonth10]], pastMonth11: [past12Months[10], earningsByMonth[pastMonth11]], pastMonth12: [past12Months[11], earningsByMonth[pastMonth12]]},
        ];
        console.log(this.data);
    //     abc : [{product: 'Past Month', 'January': 324}, 
    //   {product: 'Past 3 Months', 'January': 324, 'February': 112, 'March': 90},
    //   {product: 'Past 6 Months', 'January': 324, 'February': 112, 'March': 90, 'April': 985, 'May': 555, 'June': 123},
    // ],
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

        let filtered_data = this.abc.filter(function (item) {
            return item['product'] == self.selected_product;
        });
        // let filtered_data = this.abc;
        console.log(filtered_data);

        if (this.selected_product == 'Past Month'){
          return {
            grid: {
              bottom: '25%'
            },
            title: {
                text: 'Earnings by Month'
            },
            xAxis: {
                // categories: ['Past Month']
                type: 'category',
            },
            tooltip: {},
            dataset: {
              dimensions: ['product', 'January'],
              source: filtered_data
              
            },
            yAxis: {
              type: 'value',
              splitLine : {
                show: false
              }
            },
            series: [{type: 'bar'}]
          }
        }
        else if (this.selected_product == 'Past 3 Months'){
          return {
            grid: {
              bottom: '25%'
            },
            title: {
                text: 'Earnings by Month'
            },
            xAxis: {
                // categories: ['Past Month']
                type: 'category',
            },
            tooltip: {},
            dataset: {
              dimensions: ['product', 'January', 'February', 'March'],
              source: filtered_data
              
            },
            yAxis: {
              type: 'value',
              splitLine : {
                show: false
              }
            },
            series: [
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'}]
          }
        }
        else if (this.selected_product == 'Past 6 Months'){

          return {
            grid: {
              bottom: '25%'
            },
            title: {
                text: 'Earnings by Month'
            },
            xAxis: {
                // categories: ['Past Month']
                type: 'category',
            },
            tooltip: {},
            dataset: {
              dimensions: ['product', 'January', 'February', 'March', 'April', 'May', 'June'],
              source: filtered_data
              
            },
            yAxis: {
              type: 'value',
              splitLine : {
                show: false
              }
            },
            series: [
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'}]
          }
        }
        else {
          return {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Earnings by Month'
            },
            xAxis: {
                categories: ['Past Month', 'Past 2 Months', 'Past 3 Months', 'Past 4 Months', 'Past 5 Months', 'Past 6 Months', 'Past 7 Months', 'Past 8 Months', 'Past 9 Months', 'Past 10 Months', 'Past 11 Months', 'Past 12 Months']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Earnings ($)'
                }
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: filtered_data
          }
        }
        // return {
        //     chart: {
        //         type: 'bar'
        //     },
        //     title: {
        //         text: 'Earnings by Month'
        //     },
        //     grid: {
        //         bottom: '25%'
        //     },
        //     xAxis: {
        //         type: 'category',
        //         categories: ['Past Month', 'Past 3 Months', 'Past 6 Months', 'Past Year'],
        //         axisLabel: {},
        //         nameLocation: "middle",
        //         nameGap: 78,
        //     },
        //     tooltip: {},
        //     dataset: {
        //         dimensions: ['product', 'pastMonth1', 'pastMonth2', 'pastMonth3', 'pastMonth4', 'pastMonth5', 'pastMonth6', 'pastMonth7', 'pastMonth8', 'pastMonth9', 'pastMonth10', 'pastMonth11', 'pastMonth12'],
        //         source: filtered_data
        //     },
        //     yAxis: {
        //         type: 'value',
        //         min: 0,
        //         title: {
        //             text: 'Earnings ($)'
        //         },
        //         splitLine: {
        //             show: false
        //         }
        //     }, series: [
        //         {type: 'bar'},
        //     ]
        // }
    },
  },
  // mounted() {
  //   setTimeout(() => {
  //       this.tablist();
  //     }, 3000);
  //   },
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