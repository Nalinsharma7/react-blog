import { initializeApp } from "firebase/app";
// import firebase from 'firebase/app'
// import 'firebase/firestore'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCY-eW4GGcCQRV-t1XVAaqI-gkA12jjjzg",
  authDomain: "react-hooks-blog-630f1.firebaseapp.com",
  projectId: "react-hooks-blog-630f1",
  storageBucket: "react-hooks-blog-630f1.appspot.com",
  messagingSenderId: "207011844060",
  appId: "1:207011844060:web:4155d377de6be949f78919"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = firebase.firestore();