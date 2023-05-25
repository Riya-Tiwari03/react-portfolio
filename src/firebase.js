// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkgmvDBzSm6fZMxN9MJp0caYFIbf1Vyes",
  authDomain: "react-portfolio-riya.firebaseapp.com",
  projectId: "react-portfolio-riya",
  storageBucket: "react-portfolio-riya.appspot.com",
  messagingSenderId: "71275704231",
  appId: "1:71275704231:web:db1dcf6e3b8448fdca9082",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
