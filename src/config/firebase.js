import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC9El0EbBH01kv98WuqpVedWDi4LPVgYhM",
  authDomain: "projeto1frontend.firebaseapp.com",
  projectId: "projeto1frontend",
  storageBucket: "projeto1frontend.firebasestorage.app",
  messagingSenderId: "393306429270",
  appId: "1:393306429270:web:4e29e078c49543628c28f7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

