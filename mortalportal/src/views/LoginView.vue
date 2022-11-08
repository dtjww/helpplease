<!-- daryl-->
<template>
  <div class="row img-overlay img-wrapper"> 
      <div class="column">
          <img class="image" src="https://images.unsplash.com/photo-1605826832916-d0ea9d6fe71e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" style="width:100%"/>
          <img class="image" src="https://images.unsplash.com/photo-1628435600697-6a954dea5055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" style="width:100%"/>
          <img class="image" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80" style="width:100%"/>
          <img class="image" src="https://images.unsplash.com/photo-1576613109753-27804de2cba8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" style="width:100%"/>
      </div>
      
      <div class="column">
          <img class="image" src="https://images.unsplash.com/photo-1558975285-193b2c315c2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" style="width:100%"/>
          <img class="image" src="https://images.unsplash.com/photo-1630432328419-bee5f50d6390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80" style="width:100%"/>
          <img class="image" src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" style="width:100%"/>
      </div> 
      
      <div class="column">
          <img class="image" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80" style="width:100%"/>
          <img class="image" src="https://images.unsplash.com/photo-1582902281043-69c645f40cd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" style="width:100%"/>
          <img class="image" src="https://images.unsplash.com/photo-1623348282113-50395974159c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" style="width:100%"/>
      </div>
      
      <div class="column">
          <img class="image" src="https://images.unsplash.com/photo-1516386408840-d718a820a05c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" style="width:100%"/>
          <img class="image" src="https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" style="width:100%"/>
          <img class="image" src="https://images.unsplash.com/photo-1504222490345-c075b6008014?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" style="width:100%"/>
          
      </div>
  </div>

    <q-layout>
        <q-page-container>
            <q-page class="page-height page-width row justify-center items-center ">
                        <q-card square bordered class="q-pa-lg shadow-1">
                            <q-card-section>
                                <div class="text-h6">Mortal Portal</div>
                            </q-card-section>
                            <q-tabs v-model="tab" class="text-teal">
                                <q-tab label="Login" name="Login" />
                                <q-tab label="Sign Up" name="Sign Up" />
                            </q-tabs>

                        <q-separator />
                        <q-tab-panels v-model="tab" animated>
                            <q-tab-panel name="Login">
                                <q-card-section class="text-center q-pa-none">
                                    <p class="text-grey-6">Not registered? Sign up for an account!</p>
                                </q-card-section>
                                <q-card-section>
                                    <q-form class="q-gutter-md">
                                        <q-input square filled clearable v-model="email_login" type="text" label="Email" />
                                        <q-input square filled clearable v-model="password_login" type="password" label="Password" />
                                    </q-form>
                                </q-card-section>
                                <q-card-actions class="q-px-md">
                                    <q-btn unelevated color="primary" size="lg" class="full-width " label="Login" @click=getUser /> 
                                </q-card-actions>
                            </q-tab-panel>

                            <q-tab-panel name="Sign Up" >
                                <q-card-section class="text-center q-pa-none">
                                    <p class="text-grey-6">Already have an account? Log in!</p>
                                </q-card-section>
                                <q-card-section>
                                    <q-form class="q-gutter-md">
                                        <q-input square filled clearable v-model="username_SU" type="text" label="Username" />
                                        <q-input square filled clearable v-model="name_SU" type="text" label="Full Name" />
                                        <q-input square filled clearable v-model="password_SU" type="password" label="Password" />
                                        <q-input square filled clearable v-model="cPassword_SU" type="password" label="Confirm Password" />
                                        <q-input square filled clearable v-model="email_SU" type="email" label="Email" />
                                    </q-form>
                                </q-card-section>
                                <q-card-actions class="q-px-md">
                                    <q-btn unelevated color="primary" size="lg" class="full-width qBtn" label="Sign up" @click=submitData />
                                </q-card-actions>
                            </q-tab-panel>
                        </q-tab-panels>
                    </q-card>
            </q-page>
        </q-page-container>
    </q-layout>

    
    <!-- <q-page class="bg-light-green window-height window-width row justify-center items-center">
      <div class="column">
        <div class="row">
          <h5 class="text-h5 text-white q-my-md">Company & Co</h5>
        </div>
        <div class="row">
          <q-card square bordered class="q-pa-lg shadow-1">
            <q-card-section>
              <q-form class="q-gutter-md">
                <q-input square filled clearable v-model="email" type="email" label="email" />
                <q-input square filled clearable v-model="password" type="password" label="password" />
              </q-form>
            </q-card-section>
            <q-card-actions class="q-px-md">
              <q-btn unelevated color="light-green-7" size="lg" class="full-width" label="Login" />
            </q-card-actions>
            <q-card-section class="text-center q-pa-none">
              <p class="text-grey-6">Not reigistered? Created an Account</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-page> -->
  </template>
  

<script>
import { ref } from 'vue'
import {useCounterStore } from "@/store/store";
import axios from "axios";
import { db } from '../firebase.js';
import { set, ref as dbRef } from "firebase/database";
const storeName = useCounterStore()
export default {
  setup () {
    return {
      tab: ref('Login'),
    }
  },
  data(){
    return {
      email_login: '',
      password_login: '',
      username_SU: '',
      name_SU: '',
      password_SU: '',
      cPassword_SU: '',
      email_SU: '',
      users: [],
      signupData: {
        email_SU: '',
        password_SU: '',
        username_SU: '',
        name_SU: '',
        interactedTasks: [],
      }}
    },

  methods:{

    getUser() {
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/Login.json')
                .then(response => {
                    console.log(response.data)
                    this.users = response.data
                    var valid = false;
                    for(var key in this.users){
                        if(this.users[key].email == this.email_login && this.users[key].password == this.password_login){
                            storeName.email = this.email_login
                            storeName.username = this.users[key].username
                            this.$router.push({name:'Home',params:{targetP: 'angel'}})
                            valid = true;
                          } 
                        }
                        if(!valid){
                            alert("Invalid Credentials")
                        }
                    }
                )
                .catch(error => {
                    console.log(error)
                })
    },
    submitData(){
      if(this.password_SU == this.cPassword_SU){
        this.signupData.email_SU = this.email_SU
        this.signupData.password_SU = this.password_SU
        this.signupData.username_SU = this.username_SU
        this.signupData.name_SU = this.name_SU
        storeName.username = this.username_SU
        storeName.emial = this.email_SU
      }
      else{
        alert("Passwords do not match")
      }
      set(dbRef(db, 'Login/' + storeName.username), this.signupData);
      this.$router.push({name:'Home',params:{targetP: 'angel'}});    
    }
    // valLogin(){
    //   console.log(this.users)
    //   for (var user of this.users){
    //     if (user.email == this.email_login && user.password == this.password_login){
    //       this.login();
    //     }
    //     else {
    //       alert("Incorrect email or password")
    //     }
    //   }
    // }
  }
}

</script>

  
<style>
.q-card {
  width: 360px;
}
/* .q-page {
  background-color: #eaac8b;
} */

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial;
}

.header {
    text-align: center;
    padding: 32px;
}

.row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
    flex: 25%;
    max-width: 25%;
    padding-left: 5px;
    padding-right: 5px;
    /* max-height: 100vh; */
}

.column img {
    margin-top: 8px;
    vertical-align: middle;
}

.image {
    padding-bottom: 5px;
    border-radius: 15px;
    opacity: 0.8;
}

.img-wrapper {
    position: relative;
    width: 100%;
    font-size: 0;
}

.img-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.86);
}


/* Responsive layout - makes a two column-layout instead of four columns */
@media (max-width: 800px) {
    .column {
        flex: 50%;
        max-width: 50%;
    }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media (max-width: 600px) {
    .column {
        flex: 100%;
        max-width: 100%;
    }
}
</style>
