import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCHKQVTq5mXlcFfvBPjAhqgUPgsnN-Yn20",
    authDomain: "clone-ff4d5.firebaseapp.com",
    databaseURL: "https://clone-ff4d5.firebaseio.com",
    projectId: "clone-ff4d5",
    storageBucket: "clone-ff4d5.appspot.com",
    messagingSenderId: "349861636451",
    appId: "1:349861636451:web:219956773fd3c8aaaf8b56",
    measurementId: "G-F0F30Z4FKF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db, auth};