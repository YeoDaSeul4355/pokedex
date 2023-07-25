import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIr1kKC1oRvN7rwf-SZOTygTRShSlKqlc",
  authDomain: "pokedex-jjul.firebaseapp.com",
  projectId: "pokedex-jjul",
  storageBucket: "pokedex-jjul.appspot.com",
  messagingSenderId: "288555907297",
  appId: "1:288555907297:web:baac86d2ba91e9c5749fa0",
  measurementId: "G-4ZQZ29XZ7X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
