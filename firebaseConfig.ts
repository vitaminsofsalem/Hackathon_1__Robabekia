// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP64-FkvIfWGIEdG9yIRZajrFXlmGbZ_A",
  authDomain: "robabekia-hackathon.firebaseapp.com",
  projectId: "robabekia-hackathon",
  storageBucket: "robabekia-hackathon.appspot.com",
  messagingSenderId: "862647060451",
  appId: "1:862647060451:web:0b200e8304032bb431c2d6",
  measurementId: "G-BHEX0CVEJ3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);