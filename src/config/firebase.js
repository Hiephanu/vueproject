
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {getFirestore} from 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZ7DHMLiPhz6y9wQj-lvCgK0jDQNoYch8",
    authDomain: "moneymanagement-c6783.firebaseapp.com",
    projectId: "moneymanagement-c6783",
    storageBucket: "moneymanagement-c6783.appspot.com",
    messagingSenderId: "723534972049",
    appId: "1:723534972049:web:f10938eeafde138b70eb30",
    measurementId: "G-TTTBXPYQMD"
  };
  const app= firebase.initializeApp(firebaseConfig)
const projectAuth = firebase.auth()
const fireStoreCore = firebase.firestore();
const db = getFirestore(app);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {fireStoreCore,projectAuth,timestamp,db}