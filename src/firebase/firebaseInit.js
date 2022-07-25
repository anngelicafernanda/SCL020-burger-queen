import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { firebaseConfig } from "./firebaseConfig.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";

import {
  getFirestore,
  collection,
  getDoc,
  doc,
  where,
  query,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  db,
  getDoc,
  collection,
  doc,
  where,
  query,
};
