<!-- daryl-->
<template>
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
import { push, ref as dbRef } from "firebase/database";
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
        name_SU: ''
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
                            this.$router.push('/home')
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
      }
      else{
        alert("Passwords do not match")
      }
      push(dbRef(db, 'Login'), this.signupData);
      this.$router.push('/home');    
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

  </style>
