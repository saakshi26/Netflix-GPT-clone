// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpQfmhBjrKjq0zt2tkF3IYtFkf9W9U7BM",
  authDomain: "neflixgpt-a8e97.firebaseapp.com",
  projectId: "neflixgpt-a8e97",
  storageBucket: "neflixgpt-a8e97.appspot.com",
  messagingSenderId: "636142371485",
  appId: "1:636142371485:web:b74cceb92f2427bd98ca74",
  measurementId: "G-BHXSYNNFG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();