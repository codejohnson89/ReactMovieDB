import firebase from "firebase";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMZLBFHvEeye7we5piYInelL9zkXyfxQo",
  authDomain: "movie-datatbase-demo.firebaseapp.com",
  databaseURL: "https://movie-datatbase-demo.firebaseio.com",
  projectId: "movie-datatbase-demo",
  storageBucket: "movie-datatbase-demo.appspot.com",
  messagingSenderId: "431962548751",
  appId: "1:431962548751:web:ea3b7973cb8d896605517a",
  measurementId: "G-CP7J4QTLR5"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;