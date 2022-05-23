import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider } 
from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC5yMjWvtmdeLlZ-_EY-89839PqyMCoZ4Y",
    authDomain: "resume-db-86e58.firebaseapp.com",
    projectId: "resume-db-86e58",
    storageBucket: "resume-db-86e58.appspot.com",
    messagingSenderId: "101209253548",
    appId: "1:101209253548:web:3323632143e2d7564d2109"
};
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
 
  // force to select an account
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Instiantiating the Database
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {

    // Getting doc ref, inside the db under user collection with user auth i.d.
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);
}