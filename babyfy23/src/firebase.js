// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsRcLwjCHMBWz600yPOGgK8km2zBEsEO0",
  authDomain: "babyfy23-660c9.firebaseapp.com",
  projectId: "babyfy23-660c9",
  storageBucket: "babyfy23-660c9.appspot.com",
  messagingSenderId: "734517033754",
  appId: "1:734517033754:web:4d4423ce614b04dcb64aa3",
  measurementId: "G-YYZ34JSLYG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };