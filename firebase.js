<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js"></script>


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
const db = firebase.firestore();
