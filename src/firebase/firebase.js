import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7RSfmhbjS3rF1NXgHHQucEHJuS2u-8SE", // Replace with real key later if needed, but config provided by user
  authDomain: "ratnanjali-bioenergy.firebaseapp.com",
  projectId: "ratnanjali-bioenergy",
  storageBucket: "ratnanjali-bioenergy.firebasestorage.app",
  messagingSenderId: "377298634208",
  appId: "1:377298634208:web:5e8df8e1881fe6b27fd785",
  measurementId: "G-W7WFHLF5Q4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
