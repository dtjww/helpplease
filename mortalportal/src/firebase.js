import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBIwKO_Z-9aegqSbQhbALqerSHxg_h2i7s",
    authDomain: "dreemteem-829c5.firebaseapp.com",
    databaseURL: "https://dreemteem-829c5-default-rtdb.firebaseio.com",
    projectId: "dreemteem-829c5",
    storageBucket: "dreemteem-829c5.appspot.com",
    messagingSenderId: "766447710623",
    appId: "1:766447710623:web:57a5ae1eab670733ac8daa",
    measurementId: "G-6D4L7KKB3W"
  };

  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app);

  const storage = getStorage();

  export{ db, storage, firebaseConfig};



