import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyA48ncocujbiJx0kjMBeY58KHvEaZWqXxk",
  authDomain: "praktika-8350c.firebaseapp.com",
  databaseURL: "https://praktika-8350c-default-rtdb.firebaseio.com",
  projectId: "praktika-8350c",
  storageBucket: "praktika-8350c.appspot.com",
  messagingSenderId: "932960287467",
  appId: "1:932960287467:web:69bbbcbc474cc7f0b8dcae"
};

firebase.initializeApp(firebaseConfig);
let storage = firebase.storage().ref(`images/`)
const db=firebase.database();

export {firebase,db,storage}