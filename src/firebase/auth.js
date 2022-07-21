import { auth, signInWithEmailAndPassword } from "../firebase/firebaseInit";

export const login = (email, password, setIsUserLogedIn) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      if (user) setIsUserLogedIn(true);

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("🚀 ~ errorMessage", errorMessage);
    });
};
