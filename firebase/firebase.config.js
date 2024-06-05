// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxn5IhNqPClvZlzAiuDIMHKj0LUJ0Sn84",
  authDomain: "job-portal-demo-972e4.firebaseapp.com",
  projectId: "job-portal-demo-972e4",
  storageBucket: "job-portal-demo-972e4.appspot.com",
  messagingSenderId: "496352050299",
  appId: "1:496352050299:web:fc62a5ab24e2c8d5c2f6de",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;