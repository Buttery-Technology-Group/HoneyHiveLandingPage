import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSgO_xq9mfOvQN7bXQtDEy3ZZ1G7WQeEA",
  authDomain: "butterywebsite.firebaseapp.com",
  databaseURL: "https://butterywebsite-default-rtdb.firebaseio.com",
  projectId: "butterywebsite",
  storageBucket: "butterywebsite.appspot.com",
  messagingSenderId: "721078494858",
  appId: "1:721078494858:web:a71cc3e7d77ac08550ef73",
  measurementId: "G-VQVSB69GT6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
