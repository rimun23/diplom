import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB2-ar7w-rMqqSsgQ1usxWlSfa9yUgHeqU",
  authDomain: "diplom-45314.firebaseapp.com",
  projectId: "diplom-45314",
  storageBucket: "diplom-45314.firebasestorage.app",
  messagingSenderId: "1060350944168",
  appId: "1:1060350944168:web:53a2bf63687cb1e53d739d",
};
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
const db = getFirestore(app);
export const auth = getAuth(app);
export { db };
