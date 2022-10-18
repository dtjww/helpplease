<!-- Ban -->
<template>
    <div class="home">
    <img alt="MainLogo" src="../assets/MainLogo.png">
    <h1>This is a home page</h1>
  </div>

  <NavBarLogIn msg="This is the LogIn page NavBar"/>
  <div class="home">
    <div class="wassup">
      <h1> {{msg}}</h1>
      <h2 v-if="user"> Signed In User: {{user}}</h2>
  
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
  
      <div v-if="isSignedIn">
        <button @click="handleSignOut">Sign Out</button>
      </div>
    </div>
</div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  import NavBarLogIn from '@/components/NavBarLogIn.vue';
  import {ref} from 'vue';
  import firebaseConfig from '../firebaseConfig.js';
  import firebase from 'firebase/compat/app';
  
  firebase.initializeApp(firebaseConfig);
  import * as firebaseui from 'firebaseui';
  import 'firebaseui/dist/firebaseui.css';
  import { getAuth, signOut} from "firebase/auth";
  const auth = getAuth();
  
  export default {
    name: 'HomeView',
    props: {
      msg: String
    },
    setup(){
      const user = ref(null);
      const isSignedIn = ref(false);
  
      const uiConfig = {
        signInSuccessUrl: 'http://localhost:8080/',
        signInFlow: 'popup',
        signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,

        ],
        callbacks: {
          signInSuccessWithAuthResult: function(authResult) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            
            user.value = authResult.user.displayName;
            console.log(authResult)
            isSignedIn.value = true;
            console.log('Signed in by user: ', user.value);
            return false; // meaning we don't redirect/refresh the page
  
          },
          uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
            }
          }
        }
  
      
      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
  
      // To add email provider to Firebase
      ui.start('#firebaseui-auth-container', uiConfig);
      const handleSignOut = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
        user.value = null;
        isSignedIn.value = false;
        console.log('Signed out');
        ui.start('#firebaseui-auth-container', uiConfig); // relogin aft signout
        
        }).catch((error) => {
          // An error happened.
          console.log(error); // for reference
        });
      }
      return {
        user,
        isSignedIn,
        handleSignOut,
        NavBarLogIn,
        NavBar
      }
      }
    }
  
  </script>
  