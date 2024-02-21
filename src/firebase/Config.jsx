import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA8C49xYmSkap5ur5uNHHz6b0DSsdhcD70",
  authDomain: "add-application-49685.firebaseapp.com",
  databaseURL: "https://add-application-49685-default-rtdb.firebaseio.com",
  projectId: "add-application-49685",
  storageBucket: "add-application-49685.appspot.com",
  messagingSenderId: "931181584141",
  appId: "1:931181584141:web:59616996fa2e40b2ffda44",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const storage = getStorage(app);
const db = getFirestore(app);

export { auth, db, storage };

