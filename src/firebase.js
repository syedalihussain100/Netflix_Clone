import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
import {getDatabase} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCifyp4RI4asreYzWTiMd7LlrMivvLRzTU",
  authDomain: "netflix-clone-260d0.firebaseapp.com",
  projectId: "netflix-clone-260d0",
  storageBucket: "netflix-clone-260d0.appspot.com",
  messagingSenderId: "445243957283",
  appId: "1:445243957283:web:d4bb32e026c0e72c981196",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getDatabase(app);


