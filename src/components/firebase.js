import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrB9FupDgjjVk4_guLC24ydG3retE3bME",
  authDomain: "login-auth-4736e.firebaseapp.com",
  projectId: "login-auth-4736e",
  storageBucket: "login-auth-4736e.appspot.com",
  messagingSenderId: "10562914305",
  appId: "1:10562914305:web:2cff37be4fa9ccf0a29800",
};

const app = initializeApp(firebaseConfig);
console.log('Firebase initialized:', app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
