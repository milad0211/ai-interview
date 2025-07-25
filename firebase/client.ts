// // Import the functions you need from the SDKs you need
// import { initializeApp, getApp, getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCR5hBW699rSNgGek6Yva0kzDmhHk8zFIg",
//   authDomain: "prepwise-da6c2.firebaseapp.com",
//   projectId: "prepwise-da6c2",
//   storageBucket: "prepwise-da6c2.firebasestorage.app",
//   messagingSenderId: "830245124239",
//   appId: "1:830245124239:web:0beb8680d7e5a29a7f98fa",
//   measurementId: "G-N2ME2E9LHC",
// };

// // Initialize Firebase
// const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
// export const auth = getAuth(app);
// export const db = getFirestore(app);


// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR5hBW699rSNgGek6Yva0kzDmhHk8zFIg",
  authDomain: "prepwise-da6c2.firebaseapp.com",
  projectId: "prepwise-da6c2",
  storageBucket: "prepwise-da6c2.firebasestorage.app",
  messagingSenderId: "830245124239",
  appId: "1:830245124239:web:0beb8680d7e5a29a7f98fa",
  measurementId: "G-N2ME2E9LHC",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);