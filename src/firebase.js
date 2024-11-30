import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSyWKAjii04HbHTBjJh4aa_SCflu4q0BE",
  authDomain: "leads-8eaee.firebaseapp.com",
  projectId: "leads-8eaee",
  storageBucket: "leads-8eaee.appspot.com",
  messagingSenderId: "301229633357",
  appId: "1:301229633357:web:e09237f3625cb87deb5104",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
