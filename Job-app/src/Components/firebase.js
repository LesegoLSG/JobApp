// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFIRtjowmvamS1RYmILJHLvqojRnQBs6k",
  authDomain: "job-application-31d24.firebaseapp.com",
  projectId: "job-application-31d24",
  storageBucket: "job-application-31d24.appspot.com",
  messagingSenderId: "223537121493",
  appId: "1:223537121493:web:ebfd19d1435db97faa7a5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;