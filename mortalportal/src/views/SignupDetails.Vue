<!-- daryl-->
<template>
    <q-layout>
        <q-page-container>
            <q-page class="page-height page-width row justify-center items-center karla">
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
      tab: ref('Sign Up'),
    }
  },
  data(){
    return {
      email_login: '',
      password_login: '',
      username: '',
      name: '',
      password: '',
      cPassword: '',
      email: '',
      users: [],
      signupData: {
        email: '',
        password: '',
        username: '',
        name: ''
      }}
    },
  
  methods:{
    login(){
      storeName.username = this.email_login
      
    },
    getUser() {
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/Login.json')
                .then(response => {
                    console.log(response.data)
                    this.users = response.data
                    var valid = false;
                    for(var key in this.users){
                        if(this.users[key].email == this.email_login && this.users[key].password == this.password_login){
                            this.login()
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
      if(this.password == this.cPassword){
        this.signupData.email = this.email
        this.signupData.password = this.password
        this.signupData.username = this.username
        this.signupData.name = this.name
      }
      else{
        alert("Passwords do not match")
      }
      push(dbRef(db, 'Login'), this.signupData);
      this.$router.push('/home');    
    }
  }
  }
  
  </script>
  
  
  <style>
  .q-card {
    width: 360px;
  }

  .fonts{
    font-family: karla;
  }
  @import url("https://fonts.googleapis.com/css?family=Karla");
  </style>
  