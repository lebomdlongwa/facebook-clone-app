import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZRm3gooL5sSRKeZ2JRNiv1KpA3BQvggM",
  authDomain: "facebook-clone-99d15.firebaseapp.com",
  projectId: "facebook-clone-99d15",
  storageBucket: "facebook-clone-99d15.appspot.com",
  messagingSenderId: "905534459342",
  appId: "1:905534459342:web:340ae3b74b49adac09ef9f",
  measurementId: "G-NG18LPE01K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
