import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBUgu2u-yrgjzfdXIBvMx1gF60p9-pYKpw",
  authDomain: "btc-sale.firebaseapp.com",
  projectId: "btc-sale",
  storageBucket: "btc-sale.appspot.com",
  messagingSenderId: "998372123211",
  appId: "1:998372123211:web:e186b12b10da00589663ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()

export {auth, db}