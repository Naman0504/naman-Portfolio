import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj6BSEtbtwlZEtP47oA4UInKTdEDQtIMw",
  authDomain: "naman-portfolio05.firebaseapp.com",
  projectId: "naman-portfolio05",
  storageBucket: "naman-portfolio05.appspot.com",
  messagingSenderId: "79665542246",
  appId: "1:79665542246:web:776cf94066c9b491c1e9a7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
