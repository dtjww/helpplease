<!-- daryl-->
<template>

  <div class="row img-overlay img-wrapper karla">
    <div class="column">
      <img class="image"
        src="https://images.unsplash.com/photo-1605826832916-d0ea9d6fe71e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        style="width:100%" />
      <img class="image"
        src="https://images.unsplash.com/photo-1628435600697-6a954dea5055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        style="width:100%" />
      <img class="image"
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
        style="width:100%" />
      <img class="image"
        src="https://images.unsplash.com/photo-1576613109753-27804de2cba8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        style="width:100%" />
    </div>

    <div class="column">
      <img class="image"
        src="https://images.unsplash.com/photo-1558975285-193b2c315c2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        style="width:100%" />
      <img class="image"
        src="https://images.unsplash.com/photo-1630432328419-bee5f50d6390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
        style="width:100%" />
      <img class="image"
        src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        style="width:100%" />
    </div>

    <div class="column">
      <img class="image"
        src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
        style="width:100%" />
      <img class="image"
        src="https://images.unsplash.com/photo-1582902281043-69c645f40cd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        style="width:100%" />
      <img class="image"
        src="https://images.unsplash.com/photo-1623348282113-50395974159c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        style="width:100%" />
    </div>

    <div class="column">
      <img class="image"
        src="https://images.unsplash.com/photo-1516386408840-d718a820a05c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        style="width:100%" />
      <img class="image"
        src="https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        style="width:100%" />
      <img class="image"
        src="https://images.unsplash.com/photo-1504222490345-c075b6008014?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        style="width:100%" />

    </div>
  </div>

  <q-layout>
    <q-scroll-area style="height: 100vh; max-width: 100vw;" :thumb-style="thumbStyle" :bar-style="barStyle">
      <q-page-container>
        <q-page class="page-height page-width row justify-center items-center karla">
          <q-card square bordered class="q-pa-lg shadow-1">
            <q-card-section>
              <router-link to="/" style="width:170px;padding:0%">
                <img src="@/assets/MainLogo2.png" style="width:75%;padding:0%;margin:0" />
              </router-link>
            </q-card-section>
            <q-tabs v-model="tab" class="text-secondary">
              <q-tab label="Login" name="Login" @click=gotoLogin() />
              <q-tab label="Sign Up" name="Sign Up" />
            </q-tabs>

            <q-separator />
            <q-tab-panels v-model="tab" animated>


              <q-tab-panel name="Sign Up">

                <q-card-section>
                  <q-form class="q-gutter-md">
                    <q-input rounded outlined clearable color="secondary" v-model="username" type="text" lazy-rules 
                    label="Username"
                    :rules="[val => val && val.length > 0 || 'Enter a username']" @keyup.enter="submitData"/>
                    <q-input rounded outlined clearable color="secondary" v-model="name" type="text" label="Full Name" @keyup.enter="submitData"
                    lazy-rules :rules="[val => val && val.length > 0 || 'Enter your name']" />
                    <q-input rounded outlined clearable color="secondary" v-model="password" type="password" label="Password" @keyup.enter="submitData"
                    lazy-rules :rules="[val => val && val.length > 0 || 'Enter your password',
                  val => val.length > 5 && val.length < 21 || 'Password has to be 6-20 characters long']" />
                    <q-input rounded outlined clearable color="secondary" v-model="cPassword" type="password" label="Confirm Password" @keyup.enter="submitData"/>
                    <q-input rounded outlined clearable color="secondary" v-model="email" type="email" label="Email" @keyup.enter="submitData"
                    lazy-rules :rules="[val => val && val.length > 0 || 'Enter your email',
                  val => val.includes('@') && val.includes('.') || 'Enter a valid email']" />
                  </q-form>
                </q-card-section>
                <q-card-actions class="q-px-md">
                  <q-btn unelevated color="secondary" size="md" style="width:17vw;margin-left:auto;margin-right:auto;"
                    label="Sign up" @click=submitData  />
                </q-card-actions>
                <br>
                OR
                <q-card-section class="text-center q-pa-none">

                  <div class="googleLogin">

                    <h6 v-if="lUser != null" class="text-black">{{ lUser }}</h6>
                    <div id="firebaseui-auth-container"></div>
                    <div id="loader">Loading...</div>
                    <div v-if="isSignedIn">
                      <button @click="getGoogleAuth().handleSignOut">Sign Out</button>
                    </div>
                  </div>
                </q-card-section>
              </q-tab-panel>

            </q-tab-panels>
          </q-card>

        </q-page>
      </q-page-container>
    </q-scroll-area>
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

  <!-- Google login code is in start and end comments, only works on localhost for now -->
  <!-- <div class="googleLogin">
    <h6 v-if="isSignedIn.value" class="text-white">Signed In User: {{ lUser }}</h6>
    <div id="firebaseui-auth-container"></div>
    <div id="loader">Loading...</div>
    <div v-if="isSignedIn">
      <button @click="handleSignOut">Sign Out</button>
    </div>
  </div> -->
</template>


<script>
import { ref } from 'vue'
// google login start
import { firebaseConfig } from '../firebase.js';
import firebase from 'firebase/compat/app';
firebase.initializeApp(firebaseConfig);
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { getAuth, signOut } from "firebase/auth";
// import { getAuth, GoogleAuthProvider, signInWithPopup,signOut } from "firebase/auth";
const auth = getAuth();
// google login end


import { useCounterStore } from "@/store/store";
import axios from "axios";
import { db } from '../firebase.js';
import { set, ref as dbRef } from "firebase/database";
const storeName = useCounterStore()
export default {
  setup() {
    return {
      tab: ref('Sign Up'),
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#FFFFFF',
        width: '5px',
        opacity: 0.75
      },

      barStyle: {
        right: '2px',
        borderRadius: '9px',
        width: '9px',
        opacity: 0.2
      }
    }
  },
  data() {
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
        name: '',
      },
      lUser: ref(null),
      isSignedIn: ref(false)
    }
  },

  methods: {
    login() {
      storeName.username = this.email_login

    },
    getUser() {
      axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/Login.json')
        .then(response => {
          console.log(response.data)
          this.users = response.data
          var valid = false;
          for (var key in this.users) {
            if (this.users[key].email == this.email_login && this.users[key].password == this.password_login) {
              this.login()
              this.$router.push('/home')
              valid = true;
            }
          }
          if (!valid) {
            alert("Invalid Credentials")
          }
        }
        )
        .catch(error => {
          console.log(error)
        })
    },
    submitData() {
      if (this.email != '' && this.email.includes('@') && this.email.includes('.') && this.password.length > 5 && this.password.length < 21 && this.password != '' && this.username != '' && this.name != '' && this.cPassword != '') {
        if (this.password == this.cPassword) {
          this.signupData.email = this.email
          this.signupData.password = this.password
          this.signupData.username = this.username
          this.signupData.name = this.name
          set(dbRef(db, 'Login/' + this.signupData.username), this.signupData);
          storeName.username = this.signupData.username;
          storeName.email = this.signupData.email
          this.$router.push('/home/angel');
        }
        else {
          alert("Password and Confirm Password do not match")
        }
      }
      else {
        alert("Please fill up the fields accordingly")
      }

    },

    getGoogleAuth() {
      // google login start
      const user = ref(null);
      const email = ref(null);
      const isSignedIn = ref(false);
      const uiConfig = {
        signInFlow: 'popup',
        signinSuccessUrl: 'loading',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
          signInSuccessWithAuthResult: function (authResult) {
            user.value = authResult.user.displayName;
            email.value = authResult.user.email;
            isSignedIn.value = true;
            console.log('Signed in by user ' + user.value);
            storeName.name = user.value
            storeName.email = email.value
            // so it doesn't refresh the page
            return true;
          },
          uiShown: function () {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
          },
        }
      }

      // Initialize the FirebaseUI Widget using Firebase.
      var ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
      ui.start('#firebaseui-auth-container', uiConfig);
      console.log()
      const handleSignOut = () => {
        signOut(auth).then(() => {
          // Sign-out successful.
          user.value = null;
          isSignedIn.value = false;
          console.log('Signed out');
          this.isSignedIn = false;
          ui.start('#firebaseui-auth-container', uiConfig);
        }).catch((error) => {
          // An error happened.
          console.log(error);
        });
      }



      // google login end
      return {
        // google login start
        user,
        isSignedIn,
        handleSignOut,

        // google login end
      }
    },
    gotoLogin() {
      this.$router.push('/login')
    },
    
  },
  mounted:
    function () {
      this.getGoogleAuth()
      this.lUser = this.getGoogleAuth().user
      this.isSignedIn = this.getGoogleAuth().isSignedIn
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

.fonts {
  font-family: karla;
}
@import url("https://fonts.googleapis.com/css?family=Karla");
</style>
