import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDxb0DzfV5Zk0RnUptctiZYT9bttju7nRk",
    authDomain: "formulario-ol.firebaseapp.com",
    projectId: "formulario-ol",
    storageBucket: "formulario-ol.appspot.com",
    messagingSenderId: "810536312141",
    appId: "1:810536312141:web:0705821e8bce0ac91b2b04",
    measurementId: "G-G9S02569ZB"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;