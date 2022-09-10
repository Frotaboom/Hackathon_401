import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "hackathon-a9858.firebaseapp.com",
    projectId: "hackathon-a9858",
    storageBucket: "hackathon-a9858.appspot.com",
    messagingSenderId: "524955312370",
    appId: "1:524955312370:web:bc41396fb43790d145706b"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
