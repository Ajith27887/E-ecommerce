// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtU3nNtpnXNl4A44iv0v8hf4lePpQyAsM",
  authDomain: "food-ordering-app-cd64b.firebaseapp.com",
  projectId: "food-ordering-app-cd64b",
  storageBucket: "food-ordering-app-cd64b.firebasestorage.app",
  messagingSenderId: "258475928992",
  appId: "1:258475928992:web:d8577d759440a3f34808c5",
  measurementId: "G-W9WKYR3G5S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Pass the app instance to getAuth

export { auth, app };
