// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQPPN9MqNgcE2CkhCFMcsKrYzwCpJCtaM",
  authDomain: "buybusy-redux-ce0fe.firebaseapp.com",
  projectId: "buybusy-redux-ce0fe",
  storageBucket: "buybusy-redux-ce0fe.appspot.com",
  messagingSenderId: "855341532747",
  appId: "1:855341532747:web:4a6b6ce58c2f96608eefce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
