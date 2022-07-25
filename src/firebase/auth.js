import {
  auth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  getDoc,
  doc,
  db,
} from "../firebase/firebaseInit";

export const login = async (
  email,
  password,
  setIsUserLoggedIn
  // setUserType
) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        const docRef = doc(db, `users`, uid);
        console.log("🚀 ~ docRef", docRef);
        const docSnap = await getDoc(docRef);
        console.log("🚀 ~ docSnap", docSnap);
        setIsUserLoggedIn(true);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  } catch (error) {
    const errorCode = error.code;
    console.log("🚀 ~ errorCode", errorCode);
    const errorMessage = error.message;
    console.log("🚀 ~ errorMessage", errorMessage);
  }
};

export const signOutSession = async (setIsUserLoggedIn) => {
  // cerrar la sesion en firebase a traves de la funncon signOut
  // actualizar el estado del contexto
  // manejar el error (con un console.log unicamente)

  try {
    await signOut(auth);
    setIsUserLoggedIn(false);
    console.log("Sesion cerrada");
  } catch (error) {
    const errorCode = error.code;
    console.log("🚀 ~ errorCode", errorCode);
    const errorMessage = error.message;
    console.log("🚀 ~ errorMessage", errorMessage);
  }
};
