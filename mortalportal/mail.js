// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBIwKO_Z-9aegqSbQhbALqerSHxg_h2i7s",
  authDomain: "dreemteem-829c5.firebaseapp.com",
  databaseURL: "https://dreemteem-829c5-default-rtdb.firebaseio.com",
  projectId: "dreemteem-829c5",
  storageBucket: "dreemteem-829c5.appspot.com",
  messagingSenderId: "766447710623",
  appId: "1:766447710623:web:57a5ae1eab670733ac8daa"
};

  // initalize firebase
firebase.initializeApp(firebaseConfig);

  // reference your database

  // var DreemTeemDB = firebase.database().ref('DreemTeem');

  // Get a database reference to our posts
  const db = firebase.database();
  const ref = db.ref('DreemTeem');

  // Attach an asynchronous callback to read the data at our posts reference
  ref.on('value', (snapshot) => {
    console.log(snapshot.val());
  }, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
  }); 

  // document.getElementById('contactForm').addEventListener('submit',submitForm);

  // function submitForm(e){
  //   e.preventDefault();
  //   var name = getElementVal('name');
  //   var emailId = getElementVal('emailId');
  //   var msgContent = getElementVal('msgContent'); 

  //   console.log(name, emailId, msgContent);
  //   saveMessages(name, emailId, msgContent);
  // }

  // function getElementVal(id){
  //   return document.getElementById(id).value;
  // }

  // function saveMessages(name ,emailid ,msgContent){
  //   var newContactForm = DreemTeemDB.push();
  //   newContactForm.set({
  //     name: name,
  //     emailid : emailid,
  //     msgContant : msgContent,
  //   });
  // }

