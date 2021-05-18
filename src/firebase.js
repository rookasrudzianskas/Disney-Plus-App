import 'firebase/storage';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//     authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//     projectId: "disneyplus-clone-a33d5",
//     storageBucket: "disneyplus-clone-a33d5.appspot.com",
//     messagingSenderId: "37918794208",
//     appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//     measurementId: "G-DRVLJKWRWG",
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
