import firebase from "firebase"
var firebaseConfig = {
    apiKey: "AIzaSyBZzjergV-8K1yG_cMqpsHyhQeN2ddcP2I",
    authDomain: "my-app-7ea7b.firebaseapp.com",
    projectId: "my-app-7ea7b",
    storageBucket: "my-app-7ea7b.appspot.com",
    messagingSenderId: "1051643207020",
    appId: "1:1051643207020:web:ea353f27cae5e857872749",
    measurementId: "G-S5Q3ESW5FW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  export default db;