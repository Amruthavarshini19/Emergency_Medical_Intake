// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFrltOQsDSdShai8bHHzlxk5fz_HpQCjo",
  authDomain: "ai-emergency-intake.firebaseapp.com",
  projectId: "ai-emergency-intake",
  storageBucket: "ai-emergency-intake.firebasestorage.app",
  messagingSenderId: "431476793847",
  appId: "1:431476793847:web:84e991ab24ab706de0cef2",
  measurementId: "G-MTYYRM6GVW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();
