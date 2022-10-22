<!-- Mel -->

<template>
    <NavBar/>

    <h3>Create a New Task</h3>
    <div><q-card class="card">
        <form>
            
            <table>
                <tr>
                    <td><h6>Category of Task</h6></td>
                </tr>
                <tr>
                    <td><q-select outlined v-model="category" :options="task" label="Choose a Task" class="inputboxes" /></td>
                </tr>

                <tr>
                    <td><h6>Name of Task</h6></td>
                </tr>
                <tr>
                    <td><q-input outlined v-model="name" placeholder="Name of Task" maxlength="30" class="inputboxes"/></td>
                </tr>

                <tr>
                    <td><h6>Description of Task</h6></td>
                </tr>
                <tr>
                    <td><q-input outlined v-model="desc" placeholder="Description of Task" maxlength="30" class="inputboxes"/></td>
                </tr>

                <tr>
                    <td><h6>Price</h6></td>
                </tr>
                <tr>
                    <td>
                        <q-input outlined v-model="price" placeholder="Price" maxlength="30" class="price" prefix='$'/>
                    </td>
                </tr>

                <tr>
                    <td><h6>Location</h6></td>
                </tr>
                <tr>
                    <td><q-input outlined v-model="loc" placeholder="Location of Task" maxlength="30" class="inputboxes"/></td>
                </tr>

                <tr>
                    <td><h6>Date & Time</h6></td>
                </tr>
                <tr>
                        <td>
                            <q-input v-model="time" outlined type="time" class='date'/> 
                            <q-input v-model="date" outlined type="date" class="time"/>
                        </td>

                </tr>
                <tr>
                    <td>
                        <h6>Image (Optional)</h6>
                    </td>
                </tr>
                <tr>
                    <td>
                        <q-input
                            @update:model-value="val => { file = val[0] }"
                            outlined
                            type="file"/>
                    </td>
                </tr>
            </table>
            <q-btn color="white" text-color="black" label="Post Task" class='button' @click=submitForm() />
        </form>
    </q-card>
    </div>

</template>

<script>
import { ref } from 'vue'
import NavBar from '@/components/NavBar.vue'
// import { firebaseConfig } from '@/components/FirebasePush.vue';
// import * as firebase from 'firebase';
// import { initializeApp } from "firebase/app";

// firebase.initializeApp(firebaseConfig);
// var DreemTeemDB = firebase.database().ref('DreemTeem');
  
  
export default {
  data () {
    return {
      model: ref(null),
      task: [
        'Shopping', 'Physical', 'Assignment/Project', 'Hardware/Software'
      ],
      time: ref(''),
      date: ref(''),
      loc: ref(''),
      name: ref(''),
      desc: ref(''),
      category: ref(''),
      file: ref(null),
      files: ref(null),
      price: ref('')
    }
  },
  components:{
        NavBar
  },
//   methods:{
//         saveDB(Amount, Data, Time, Task){
        
//         var newForm = DreemTeemDB.push();
//         newForm.set({
//         Amount: Amount,
//         Date: Date,
//         Time: Time,
//         Task: Task
//             })
//         },
//         submitForm(){
//             var Amount = this.price;
//             var Date = this.date;
//             var Time = this.time;
//             var Task = this.name;
//             this.saveDB(Amount, Date, Time, Task);
//         },
    
    
    // }

}

</script>

<style>

.card{
    width:700px;
    margin-left:auto;
    margin-right:auto;
    margin-bottom: 50px;
    padding:50px;

}
h6{
    margin:auto;
    text-align:left;
}

.inputboxes{
    width:600px;
    margin-top:10px;
    margin-bottom: 10px;
    margin-left:0px;
    text-align:center;
    
}

.price{
    width:100px;
    text-align:center;

}

.date{
    width:250px;
    float:left;
    margin-right:5px;
}

.time{
    width:250px;
    float:left;
    margin-left:5px;
}

h3{
    margin:auto
}

.button{
    margin:15px;
}

/* body{
  background-image: url("https://marketplace.canva.com/EAFHm4JWsu8/1/0/1600w/canva-pink-landscape-desktop-wallpaper-HGxdJA_xIx0.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position:center;
  background-size:cover;
  } */
</style>