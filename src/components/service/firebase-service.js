import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAa4-gzvg9UEUdZPxBAr9YHcQgg2PeX08w",
    authDomain: "coderhouse-ecommerce-bf168.firebaseapp.com",
    projectId: "coderhouse-ecommerce-bf168",
    storageBucket: "coderhouse-ecommerce-bf168.appspot.com",
    messagingSenderId: "1011830861458",
    appId: "1:1011830861458:web:666d515da282e40b9a004b"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
