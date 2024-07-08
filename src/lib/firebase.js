import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFireStore} from "firebase/firestore"
import getStorage from "redux-persist/es/storage/getStorage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-8c271.firebaseapp.com",
  projectId: "reactchat-8c271",
  storageBucket: "reactchat-8c271.appspot.com",
  messagingSenderId: "554997743869",
  appId: "1:554997743869:web:144d10f0033d736facfe94",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFireStore();
export const storage = getStorage()