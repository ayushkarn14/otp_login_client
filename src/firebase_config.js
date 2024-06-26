// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrhT6CWBGjF9I-zyf0mWnjBTxgpdizLyk",
  authDomain: "artist-f1dda.firebaseapp.com",
  projectId: "artist-f1dda",
  storageBucket: "artist-f1dda.appspot.com",
  messagingSenderId: "401070255832",
  appId: "1:401070255832:web:0958a528efa285669ff1ad",
  measurementId: "G-GXCSM39DBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;