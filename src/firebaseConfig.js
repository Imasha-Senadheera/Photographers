import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfCb3WJ5_HGrt15fSsMob8PNqnICo1NX4",
  authDomain: "photographer-project-8ccc5.firebaseapp.com",
  projectId: "photographer-project-8ccc5",
  storageBucket: "photographer-project-8ccc5.appspot.com",
  messagingSenderId: "445562681844",
  appId: "1:445562681844:web:6d798d9936fc904939e1a1",
  measurementId: "G-R80KFWF4TT",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
