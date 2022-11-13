<template>
    <q-card-section>
        <div class="text-h5 text-black-8 text-weight-bold">
            Summarised Earnings
            <q-select outlined v-model="selected_product" class="bg-white float-right q-mb-sm " style="width:200px;"
                :options="product_options" label="Select Duration" />
        </div>
    </q-card-section>

    <q-card-section class="q-pa-none map_height" style="height: 500px;">
        <IEcharts :option="getBarChartOptions" :resizable="true" notMerge/>
    </q-card-section>
</template>

<script>
import { ref } from 'vue';
import IEcharts from 'vue3-echarts-v3/src/full.js';
import axios from 'axios';
import { useCounterStore } from "@/store/store";
const storeName = useCounterStore();

export default {
    name: 'ProfileView',
    props: {},
    components: {
        IEcharts
    },
    data() {
        return {
            tab: 'MyAccount',
            selected_product: 'Past Month',

            data: [],
            abc: [{ product: 'Past Month', 'January': 324 },
            { product: 'Past 3 Months', 'January': 324, 'February': 112, 'March': 90 },
            { product: 'Past 6 Months', 'January': 324, 'February': 112, 'March': 90, 'April': 985, 'May': 555, 'June': 123 },
            ],

            product_options: ['Past Month', 'Past 3 Months', 'Past 6 Months', 'Past Year',],
            loginData: {},
            // componentKey: 0,
        }
    },
    setup() {

        return {
            drawer: ref(false),
        }
    },
    methods: {
        // forceRerender() {
        //     this.componentKey += 1;
        // },
        
        getOffer() {
      var offer = 0;
      var earningsByMonth = {'January': 0, 'February': 0, 'March': 0, 'April': 0, 'May': 0, 'June': 0, 'July': 0, 'August': 0, 'September': 0, 'October': 0, 'November': 0, 'December': 0};
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
          console.log(past12Months);
        }
        var dimension1 = this.toPass = ['product', past12Months[0]];
        console.log(dimension1);
        var dimension2 = this.toPass = ['product', past12Months[0], past12Months[1], past12Months[2]];
        console.log(dimension2);
        var dimension3 = this.toPass = ['product', past12Months[0], past12Months[1], past12Months[2], past12Months[3], past12Months[4], past12Months[5]];
        console.log(dimension3);
        var dimension4 = this.toPass = ['product', past12Months[0], past12Months[1], past12Months[2], past12Months[3], past12Months[4], past12Months[5], past12Months[6], past12Months[7], past12Months[8], past12Months[9], past12Months[10], past12Months[11]];
        console.log(dimension4);

        var past3Months = [];
        for (let i = 0; i < 3; i++){
          past3Months.push(past12Months[i]);
        }

        var past6Months = [];
        for (let i = 0; i < 6; i++){
          past6Months.push(past12Months[i]);
        }
        console.log(earningsByMonth);
        this.data = earningsByMonth;
        console.log(this.data);
        this.data.January = earningsByMonth['January'];
        this.data.February = earningsByMonth['February'];
        this.data.March = earningsByMonth['March'];
        this.data.April = earningsByMonth['April'];
        this.data.May = earningsByMonth['May'];
        this.data.June = earningsByMonth['June'];
        this.data.July = earningsByMonth['July'];
        this.data.August = earningsByMonth['August'];
        this.data.September = earningsByMonth['September'];
        this.data.October = earningsByMonth['October'];
        this.data.November = earningsByMonth['November'];
        this.data.December = earningsByMonth['December'];
        console.log(this.data);
        var result = [];
        if (past12Months[0] == 'January'){
          result = [{product: 'Past Month', 'January': earningsByMonth['January']},
          {product: 'Past 3 Months', 'January': earningsByMonth['January'], 'December': earningsByMonth['December'], 'November': earningsByMonth['November']},
          {product: 'Past 6 Months', 'January': earningsByMonth['January'], 'December': earningsByMonth['December'], 'November': earningsByMonth['November'], 'October': earningsByMonth['October'], 'September': earningsByMonth['September'], 'August': earningsByMonth['August']},
          {product: 'Past Year', 'January': earningsByMonth['January'], 'December': earningsByMonth['December'], 'November': earningsByMonth['November'], 'October': earningsByMonth['October'], 'September': earningsByMonth['September'], 'August': earningsByMonth['August'], 'July': earningsByMonth['July'], 'June': earningsByMonth['June'], 'May': earningsByMonth['May'], 'April': earningsByMonth['April'], 'March': earningsByMonth['March'], 'February': earningsByMonth['February']}];
        }
        else if (past12Months[0] == 'February'){
          result = [{product: 'Past Month', 'February': earningsByMonth['February']},
          {product: 'Past 3 Months', 'February': earningsByMonth['February'], 'January': earningsByMonth['January'], 'December': earningsByMonth['December']},
          {product: 'Past 6 Months', 'February': earningsByMonth['February'], 'January': earningsByMonth['January'], 'December': earningsByMonth['December'], 'November': earningsByMonth['November'], 'October': earningsByMonth['October'], 'September': earningsByMonth['September']},
          {product: 'Past Year', 'February': earningsByMonth['February'], 'January': earningsByMonth['January'], 'December': earningsByMonth['December'], 'November': earningsByMonth['November'], 'October': earningsByMonth['October'], 'September': earningsByMonth['September'], 'August': earningsByMonth['August'], 'July': earningsByMonth['July'], 'June': earningsByMonth['June'], 'May': earningsByMonth['May'], 'April': earningsByMonth['April'], 'March': earningsByMonth['March']}];
        }
        else if (past12Months[0] == 'March'){
          result = [{product: 'Past Month', 'March': earningsByMonth['March']},
          {product: 'Past 3 Months', 'March': earningsByMonth['March'], 'February': earningsByMonth['February'], 'January': earningsByMonth['January']},
          {product: 'Past 6 Months', 'March': earningsByMonth['March'], 'February': earningsByMonth['February'], 'January': earningsByMonth['January'], 'December': earningsByMonth['December'], 'November': earningsByMonth['November'], 'October': earningsByMonth['October']},
          {product: 'Past Year', 'March': earningsByMonth['March'], 'February': earningsByMonth['February'], 'January': earningsByMonth['January'], 'December': earningsByMonth['December'], 'November': earningsByMonth['November'], 'October': earningsByMonth['October'], 'September': earningsByMonth['September'], 'August': earningsByMonth['August'], 'July': earningsByMonth['July'], 'June': earningsByMonth['June'], 'May': earningsByMonth['May'], 'April': earningsByMonth['April']}];
        }
        else if (past12Months[0] == 'April'){
          result = [{product: 'Past Month', 'April': earningsByMonth['April']},
          {product: 'Past 3 Months', 'April': earningsByMonth['April'], 'March': earningsByMonth['March'], 'February': earningsByMonth['February']},
          {product: 'Past 6 Months', 'April': earningsByMonth['April'], 'March': earningsByMonth['March'], 'February': earningsByMonth['February'], 'January': earningsByMonth['January'], 'December': earningsByMonth['December'], 'November': earningsByMonth['November']},
          {product: 'Past Year', 'April': earningsByMonth['April'], 'March': earningsByMonth['March'], 'February': earningsByMonth['February'], 'January': earningsByMonth['January'], 'December': earningsByMonth['December'], 'November': earningsByMonth['November'], 'October': earningsByMonth['October'], 'September': earningsByMonth['September'], 'August': earningsByMonth['August'], 'July': earningsByMonth['July'], 'June': earningsByMonth['June'], 'May': earningsByMonth['May']}];
        }
        else if (past12Months[0] == 'May'){
          result = [{product: 'Past Month', 'May': earningsByMonth['May']},
          {product: 'Past 3 Months', 'May': earningsByMonth['May'], 'April': earningsByMonth['April'], 'March': earningsByMonth['March']},
          {product: 'Past 6 Months', 'May': earningsByMonth['May'], 'April': earningsByMonth['April'], 'March': earningsByMonth['March'], 'February': earningsByMonth['February'], 'January': earningsByMonth['January'], 'December': earningsByMonth['December']},
          {product: 'Past Year', 'May': earningsByMonth['May'], 'April': earningsByMonth['April'], 'March': earningsByMonth['March'], 'February': earningsByMonth['February'], 'January': earningsByMonth['January'], 'December': earningsByMonth['December'], 'November': earningsByMonth['November'], 'October': earningsByMonth['October'], 'September': earningsByMonth['September'], 'August': earningsByMonth['August'], 'July': earningsByMonth['July'], 'June': earningsByMonth['June']}];
        }
        else if (past12Months[0] == 'June'){
          result = [{product: 'Past Month', 'June': earningsByMonth['June']},
          {product: 'Past 3 Months', 'June': earningsByMonth['June'], 'May': earningsByMonth['May'], 'April': earningsByMonth['April']},
          {product: 'Past 6 Months', 'June': earningsByMonth['June'], 'May': earningsByMonth['May'], 'April': earningsByMonth['April'], 'March': earningsByMonth['March'], 'February': earningsByMonth['February'], 'January': earningsByMonth['January']},
          {product: 'Past Year', 'June': earningsByMonth['June'], 'May': earningsByMonth['May'], 'April': earningsByMonth['April'], 'March': earningsByMonth['March'], 'February': earningsByMonth['February'], 'January': earningsByMonth['January'], 'December': earningsByMonth['December'], 'November': earningsByMonth['November'], 'October': earningsByMonth['October'], 'September': earningsByMonth['September'], 'August': earningsByMonth['August'], 'July': earningsByMonth['July']}];
        }
        else if (past12Months[0] == 'July'){
          result = [{product: 'Past Month', 'July': earningsByMonth['July']},
          {product: 'Past 3 Months', 'July': earningsByMonth['July'], 'June': earningsByMonth['June'], 'May': earningsByMonth['May']},
          {product: 'Past 6 Months', 'July': earningsByMonth['July'], 'June': earningsByMonth['June'], 'May': earningsByMonth['May'], 'April': earningsByMonth['April'], 'March': earningsByMonth['March'], 'February': earningsByMonth['February']},
          {product: 'Past Year', 'July': earningsByMonth['July'], 'June': earningsByMonth['June'], 'May': earningsByMonth['May'], 'April': earningsByMonth['April'], 'March': earningsByMonth['March'], 'February': earningsByMonth['February'], 'January': earningsByMonth['January'], 'December': earningsByMonth['December'], 'November': earningsByMonth['November'], 'October': earningsByMonth['October'], 'September': earningsByMonth['September'], 'August': earningsByMonth['August']}];
        }
        else if (past12Months[0] == 'August'){
          result = [{product: 'Past Month', 'August': earningsByMonth['August']},
          {product: 'Past 3 Months', 'August': earningsByMonth['August'], 'July': earningsByMonth['July'], 'June': earningsByMonth['June']},
          {product: 'Past 6 Months', 'August': earningsByMonth['August'], 'July': earningsByMonth['July'], 'June': earningsByMonth['June'], 'May': earningsByMonth['May'], 'April': earningsByMonth['April'], 'March': earningsByMonth['March']},
          {product: 'Past Year', 'August': earningsByMonth['August'], 'July': earningsByMonth['July'], 'June': earningsByMonth['June'], 'May': earningsByMonth['May'], 'April': earningsByMonth['April'], 'March': earningsByMonth['March'], 'February': earningsByMonth['February'], 'January': earningsByMonth['January'], 'December': earningsByMonth['December'], 'November': earningsByMonth['November'], 'October': earningsByMonth['October'], 'September': earningsByMonth['September']}];
        }
        else if (past12Months[0] == 'September'){
          result = [{product: 'Past Month', 'September': earningsByMonth['September']},
          {product: 'Past 3 Months', 'September': earningsByMonth['September'], 'August': earningsByMonth['August'], 'July': earningsByMonth['July']},
          {product: 'Past 6 Months', 'September': earningsByMonth['September'], 'August': earningsByMonth['August'], 'July': earningsByMonth['July'], 'June': earningsByMonth['June'], 'May': earningsByMonth['May'], 'April': earningsByMonth['April']},
          {product: 'Past Year', 'September': earningsByMonth['September'], 'August': earningsByMonth['August'], 'July': earningsByMonth['July'], 'June': earningsByMonth['June'], 'May': earningsByMonth['May'], 'April': earningsByMonth['April'], 'March': earningsByMonth['March'], 'February': earningsByMonth['February'], 'January': earningsByMonth['January'], 'December': earningsByMonth['December'], 'November': earningsByMonth['November'], 'October': earningsByMonth['October']}];
        }
        else if (past12Months[0] == 'October'){
          result = [{product: 'Past Month', 'October': earningsByMonth['October']},
          {product: 'Past 3 Months', 'October': earningsByMonth['October'], 'September': earningsByMonth['September'], 'August': earningsByMonth['August']},
          {product: 'Past 6 Months', 'October': earningsByMonth['October'], 'September': earningsByMonth['September'], 'August': earningsByMonth['August'], 'July': earningsByMonth['July'], 'June': earningsByMonth['June'], 'May': earningsByMonth['May']},
          {product: 'Past Year', 'October': earningsByMonth['October'], 'September': earningsByMonth['September'], 'August': earningsByMonth['August'], 'July': earningsByMonth['July'], 'June': earningsByMonth['June'], 'May': earningsByMonth['May'], 'April': earningsByMonth['April'], 'March': earningsByMonth['March'], 'February': earningsByMonth['February'], 'January': earningsByMonth['January'], 'December': earningsByMonth['December'], 'November': earningsByMonth['November']}];
        }
        else if (past12Months[0] == 'November'){
          result = [{product: 'Past Month', 'November': earningsByMonth['November']},
          {product: 'Past 3 Months', 'November': earningsByMonth['November'], 'October': earningsByMonth['October'], 'September': earningsByMonth['September']},
          {product: 'Past 6 Months', 'November': earningsByMonth['November'], 'October': earningsByMonth['October'], 'September': earningsByMonth['September'], 'August': earningsByMonth['August'], 'July': earningsByMonth['July'], 'June': earningsByMonth['June']},
          {product: 'Past Year', 'November': earningsByMonth['November'], 'October': earningsByMonth['October'], 'September': earningsByMonth['September'], 'August': earningsByMonth['August'], 'July': earningsByMonth['July'], 'June': earningsByMonth['June'], 'May': earningsByMonth['May'], 'April': earningsByMonth['April'], 'March': earningsByMonth['March'], 'February': earningsByMonth['February'], 'January': earningsByMonth['January'], 'December': earningsByMonth['December']}];
        }
        else {
          result = [{product: 'Past Month', 'December': earningsByMonth['December']},
          {product: 'Past 3 Months', 'December': earningsByMonth['December'], 'November': earningsByMonth['November'], 'October': earningsByMonth['October']},
          {product: 'Past 6 Months', 'December': earningsByMonth['December'], 'November': earningsByMonth['November'], 'October': earningsByMonth['October'], 'September': earningsByMonth['September'], 'August': earningsByMonth['August'], 'July': earningsByMonth['July']},
          {product: 'Past Year', 'December': earningsByMonth['December'], 'November': earningsByMonth['November'], 'October': earningsByMonth['October'], 'September': earningsByMonth['September'], 'August': earningsByMonth['August'], 'July': earningsByMonth['July'], 'June': earningsByMonth['June'], 'May': earningsByMonth['May'], 'April': earningsByMonth['April'], 'March': earningsByMonth['March'], 'February': earningsByMonth['February'], 'January': earningsByMonth['January']}];
        }
        console.log(result);

        console.log(this.abc);
        this.data = result;
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
        // let filtered_data = this.abc;
        console.log(this.selected_product);
        console.log(filtered_data);
        console.log(this.abc);
        var option = {};
        if (this.selected_product == 'Past Month'){
          option =  {
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
              dimensions: this.dimension1,
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
          option =  {
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
              dimensions: this.dimension2,
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

          option = {
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
              dimensions: this.dimension3,
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
          option = {
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
              dimensions: this.dimension4,
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
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'}]
          }
        }
        return option;
    },
  },

    created() {
        this.getOffer();
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