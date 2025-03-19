// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyv2unaomeiVHlsrBRFZngMnEudgTSNy0",
  authDomain: "clone-1b4db.firebaseapp.com",
  projectId: "clone-1b4db",
  storageBucket: "clone-1b4db.appspot.com",
  messagingSenderId: "290144649559",
  appId: "1:290144649559:web:9e4392f376bd2b676f3e12",
  measurementId: "G-3MDP64NJQG"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

// Export Firebase services
export { db, auth };
