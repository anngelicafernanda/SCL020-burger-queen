import { auth, signInWithEmailAndPassword, signOut } from "../firebase/firebaseInit";

export const login = async (email, password, setIsUserLogedIn) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    if (user) setIsUserLogedIn(true)
    
  } catch(error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("🚀 ~ errorMessage", errorMessage);
  }
  
};

export const signOutSession = async (setIsUserLogedIn) => {
  // cerrar la sesion en firebase a traves de la funncon signOut
  // actualizar el estado del contexto
  // manejar el error (con un console.log unicamente)

    try {
        await signOut(auth)
        setIsUserLogedIn(false)
        console.log('Sesion cerrada')
            
    } catch(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("🚀 ~ errorMessage", errorMessage);
    }

}





// return
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     if (user) setIsUserLogedIn(true);

  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log("🚀 ~ errorMessage", errorMessage);
  //   });