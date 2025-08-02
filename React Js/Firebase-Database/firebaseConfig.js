// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAujBQpGPXQy2KfKK6vJ8AoAmy-Qs3YKlM",
  authDomain: "fir-database-67a94.firebaseapp.com",
  projectId: "fir-database-67a94",
  storageBucket: "fir-database-67a94.firebasestorage.app",
  messagingSenderId: "125129025557",
  appId: "1:125129025557:web:54a9fab72a680a2967061c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

export {auth,db}