// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPdlOxioERkUZy7eCXIVYPOa-ZFdjoyPM",
  authDomain: "prueba-auth01.firebaseapp.com",
  projectId: "prueba-auth01",
  storageBucket: "prueba-auth01.firebasestorage.app",
  messagingSenderId: "480275176886",
  appId: "1:480275176886:web:ebcca7e48a80bedb78b517",
  measurementId: "G-Q5K183MTV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
//Bloque copiado de Firebase, parte autenticacion con usuario y contraseña.
const auth = getAuth();
export function creaUsuario(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up - 
      // console.log(`Credenciales aceptadas: ${userCredential}`);
      console.log('Credenciales aceptadas:',userCredential);
      const user = userCredential.user;
      // console.log(`Usuario: ${user}`);
      console.log('Usuario:' ,user);

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error: ${errorCode} - ${errorMessage}`);
      // ..
    });
}
/*******/
