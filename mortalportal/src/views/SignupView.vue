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
                                        <q-input square filled clearable v-model="email_login" type="text" placeholder="Email" />
                                        <q-input square filled clearable v-model="password_login" type="password" placeholder="Password" />
                                    </q-form>
                                </q-card-section>
                                <q-card-actions class="q-px-md">
                                    <q-btn unelevated color="primary" size="lg" class="full-width " label="Login" @click=login /> 
                                </q-card-actions>
                            </q-tab-panel>

                            <q-tab-panel name="Sign Up" >
                                <q-card-section class="text-center q-pa-none">
                                    <p class="text-grey-6">Already have an account? Log in!</p>
                                </q-card-section>
                                <q-card-section>
                                    <q-form class="q-gutter-md">
                                        <q-input square filled clearable v-model="fName_SU" type="text" label="First Name" />
                                        <q-input square filled clearable v-model="lName_SU" type="text" label="Last Name" />
                                        <q-input square filled clearable v-model="password_SU" type="password" label="Password" />
                                        <q-input square filled clearable v-model="cPassword_SU" type="password" label="Confirm Password" />
                                        <q-input square filled clearable v-model="email_SU" type="email" label="Email" />
                                    </q-form>
                                </q-card-section>
                                <q-card-actions class="q-px-md">
                                    <q-btn unelevated color="primary" size="lg" class="full-width qBtn" label="Sign up" @click=login />
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
      fName_SU: '',
      lName_SU: '',
      password_SU: '',
      cPassword_SU: '',
      email_SU: '',
    }
  },

  methods:{
    login(){
      storeName.username = this.email_login
      this.$router.push('/home')

    }
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
