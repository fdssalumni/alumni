//Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBkUmyNmP282sZoCXwmOo4ppCGW1gMg1ig",
    authDomain: "alumnifdss.firebaseapp.com",
    projectId: "alumnifdss",
    storageBucket: "alumnifdss.firebasestorage.app",
    messagingSenderId: "571771938800",
    appId: "1:571771938800:web:463fa79c2b902b38ccdf35",
    measurementId: "G-7VL5N3G4RL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);