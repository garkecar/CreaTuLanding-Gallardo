// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6v9n-17f9DlAUV1EdmiHR5oPcO07PcN8",
  authDomain: "reactchefinal.firebaseapp.com",
  projectId: "reactchefinal",
  storageBucket: "reactchefinal.firebasestorage.app",
  messagingSenderId: "254775184278",
  appId: "1:254775184278:web:f9703b2340fc04aa07abb7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
