
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALc_p81OK5oozydxobNu2xNGr8fNEV26I",
    authDomain: "beema-app-103ca.firebaseapp.com",
    projectId: "beema-app-103ca",
    storageBucket: "beema-app-103ca.appspot.com",
    messagingSenderId: "584938838814",
    appId: "1:584938838814:web:2238fb10345f7384cb870f",
    measurementId: "G-TBET2PT89D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
