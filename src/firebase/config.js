import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyA3bnC7I4F-qdlBQQF9v5mOXuQvHJ9cYS4",
    authDomain: "ninja-firegram-a34b1.firebaseapp.com",
    databaseURL: "https://ninja-firegram-a34b1.firebaseio.com",
    projectId: "ninja-firegram-a34b1",
    storageBucket: "ninja-firegram-a34b1.appspot.com",
    messagingSenderId: "755822636302",
    appId: "1:755822636302:web:f2a0ae2fcd4c932e223b5f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage =firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};    