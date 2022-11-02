import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB48GLlPL6f6hujByEjWH8sEHm6ZfNSycM",
  authDomain: "chat-ade4f.firebaseapp.com",
  projectId: "chat-ade4f",
  storageBucket: "chat-ade4f.appspot.com",
  messagingSenderId: "70646355490",
  appId: "1:70646355490:web:e98db226224145d8051c7b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth();
export const storage = getStorage();
export const db = getFirestore();