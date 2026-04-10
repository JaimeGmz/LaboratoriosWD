// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { get } from "http";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFKdo5rqsgdue3v-SVQuAdfX2zb4lChPI",
  authDomain: "crud-firebase-702cc.firebaseapp.com",
  projectId: "crud-firebase-702cc",
  storageBucket: "crud-firebase-702cc.firebasestorage.app",
  messagingSenderId: "409909825621",
  appId: "1:409909825621:web:332b434a5015b89a2304dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };