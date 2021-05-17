import 'firebase/storage';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCQCA7wHBo_XVEBtdynbqW4XK2EEASL-7I",
    authDomain: "rookas-disney-plus-app.firebaseapp.com",
    projectId: "rookas-disney-plus-app",
    storageBucket: "rookas-disney-plus-app.appspot.com",
    messagingSenderId: "979099827737",
    appId: "1:979099827737:web:3c509b64a0070e6e5cb488",
    measurementId: "G-7R40HFE9XZ"
};
//
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
//
//
//
export {auth, provider, storage };
export default db;
