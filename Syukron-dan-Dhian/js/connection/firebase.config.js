import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

 const firebaseConfig = {
    apiKey: "AIzaSyDRLWeYyRT4FLesoROh534jIMZizGpxKXs",
    authDomain: "wedding-60251.firebaseapp.com",
    projectId: "wedding-60251",
    storageBucket: "wedding-60251.firebasestorage.app",
    messagingSenderId: "513508231418",
    appId: "1:513508231418:web:3429524ac377389a6ea143",
    measurementId: "G-36N9QR2HK4"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);