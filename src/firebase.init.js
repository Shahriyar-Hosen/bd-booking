// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLtduvaJsBAQ-9mT-xmcm83QqOPU7Dmks",
  authDomain: "bd-booking-87d71.firebaseapp.com",
  projectId: "bd-booking-87d71",
  storageBucket: "bd-booking-87d71.appspot.com",
  messagingSenderId: "458030012919",
  appId: "1:458030012919:web:dcbdadbe166061e1edf6f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
