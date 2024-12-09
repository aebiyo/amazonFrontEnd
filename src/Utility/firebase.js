import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
// to use the database
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkUSRFaKOdEEUK1biSDzNCibjtTVe6pPA",
  authDomain: "e-clone-backend.firebaseapp.com",
  projectId: "e-clone-backend",
  storageBucket: "e-clone-backend.firebasestorage.app",
  messagingSenderId: "503588228841",
  appId: "1:503588228841:web:fb1640799b5e4140ee6a78",
  measurementId: "G-6LR3L20DR5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = firebase.firestore();