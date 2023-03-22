// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyCTAryStP8C2ljE_toyHrEydfoz-vMW0I0",
  authDomain: "babyfy-store.firebaseapp.com",
  projectId: "babyfy-store",
  storageBucket: "babyfy-store.appspot.com",
  messagingSenderId: "612839747556",
  appId: "1:612839747556:web:f678905f5fdea9c224e1f1",
  measurementId: "G-ZW9NR6T0M5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };