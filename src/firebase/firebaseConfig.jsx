// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDamhymvzY7v9PyJkZ8_SZWN7PwO5F1jZc",
  authDomain: "san-esteban-horses-ch.firebaseapp.com",
  projectId: "san-esteban-horses-ch",
  storageBucket: "san-esteban-horses-ch.appspot.com",
  messagingSenderId: "692438764968",
  appId: "1:692438764968:web:f2e4681c9710b1d9b8619d"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
