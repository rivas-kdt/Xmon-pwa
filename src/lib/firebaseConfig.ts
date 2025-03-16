// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAcxBJCVxovNKQRcqMGFMjtc7TRCI4xWk",
  authDomain: "xmon-pwa.firebaseapp.com",
  projectId: "xmon-pwa",
  storageBucket: "xmon-pwa.firebasestorage.app",
  messagingSenderId: "31713751602",
  appId: "1:31713751602:web:b1d03e2b23b7e6e6d9022b"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db }
