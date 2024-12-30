import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAlHGauIyXbKzf8y_qTbdmGIP_PfjNvlY",
  authDomain: "gamelogin-1cdff.firebaseapp.com",
  projectId: "gamelogin-1cdff",
  storageBucket: "gamelogin-1cdff.appspot.com",
  messagingSenderId: "443715521338",
  appId: "1:443715521338:web:e45e02d5e58202d777de03",
  measurementId: "G-BFJ0N7HWXE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
