import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
// import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4btOBqPhBJSlhjB42H2GO3hrwwKLvKE8",
  authDomain: "pet-clinic-fc797.firebaseapp.com",
  projectId: "pet-clinic-fc797",
  storageBucket: "pet-clinic-fc797.appspot.com",
  messagingSenderId: "702839324052",
  appId: "1:702839324052:web:55e72656eb694f1d6da381",
  measurementId: "G-PKYE9GYQY1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
export { firebaseConfig };
