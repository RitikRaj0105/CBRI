// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAcIGuVos-At5jvBUMul88rERO5h33p5KU",
  authDomain: "cbri-c54f9.firebaseapp.com",
  projectId: "cbri-c54f9",
  storageBucket: "cbri-c54f9.appspot.com", // ✅ fix: change from `.firebasestorage.app` to `.appspot.com`
  messagingSenderId: "881876903257",
  appId: "1:881876903257:web:ad2326dee09ec3a6e4d848",
  measurementId: "G-LDSJTK9WC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase services for use in the app
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
