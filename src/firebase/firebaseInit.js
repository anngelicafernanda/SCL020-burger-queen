// Importamos la aplicacion
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig.js";


// Importamos el modulo de autenticacion
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Importamos el modulo de firestore
import { getFirestore } from 'firebase/firestore'

// Inicializamos todos los modulos
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  signInWithEmailAndPassword,
  signOut,
  db
};
