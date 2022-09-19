// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9cAfGLtSF6UwI2X6ZH70tn4D1O6X06Co",
  authDomain: "england4ew.firebaseapp.com",
  projectId: "england4ew",
  storageBucket: "england4ew.appspot.com",
  messagingSenderId: "707446442552",
  appId: "1:707446442552:web:c4f2499ff56410dff6f4cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db };
export { auth };
