// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-Vw6QNzBrfc0UZhyjBmQpkY1xvE7NKpc",
  authDomain: "fir-task-manager-877b5.firebaseapp.com",
  projectId: "fir-task-manager-877b5",
  storageBucket: "fir-task-manager-877b5.firebasestorage.app",
  messagingSenderId: "186717427753",
  appId: "1:186717427753:web:87b7e9d79edd5f287be438"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const provider = new GoogleAuthProvider;

export {auth,db,provider}