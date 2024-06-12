// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcjYn4Ula66AKz7Xj09Hi1uZCJqhZmeIk",
  authDomain: "netflixgpt-cb7ef.firebaseapp.com",
  projectId: "netflixgpt-cb7ef",
  storageBucket: "netflixgpt-cb7ef.appspot.com",
  messagingSenderId: "373215182602",
  appId: "1:373215182602:web:dd35e1461aa51bc68804f3",
  measurementId: "G-M05MRVY212",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
