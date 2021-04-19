import firebase from 'firebase/app'
import'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDOjs2749nGlC39Rb7EQQp-4ownhp4ddKA",
    authDomain: "promart-reto-react.firebaseapp.com",
    projectId: "promart-reto-react",
    storageBucket: "promart-reto-react.appspot.com",
    messagingSenderId: "701023401435",
    appId: "1:701023401435:web:405d568b59aecbbb3ee3fe"
  };

  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  
  export const db = fb.firestore();
