// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth ,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZcO7pODsuMmDqiOHp67sfGpaasfv8uAY",
  authDomain: "linekedin-clone-1676a.firebaseapp.com",
  projectId: "linekedin-clone-1676a",
  storageBucket: "linekedin-clone-1676a.appspot.com",
  messagingSenderId: "898999937507",
  appId: "1:898999937507:web:b7fb81f0d93b21b13b98d6",
  measurementId: "G-8J413ZF4T8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth(app);
export const google_provider=new GoogleAuthProvider();