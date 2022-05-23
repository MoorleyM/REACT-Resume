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

    // Snapshot is getting data, or specific object for user docs
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);

    // Checking to see if user data exists
    console.log(userSnapshot.exists());

    // Checking to see if the user Snapshot exists by name and email. 
    // If the user doesn't exist we'll set the data into the db
    if(!userSnapshot.exists()) {

        // Creating username, email and date data to set.
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        // Using the userDocRef data we just recieved we want to set
        // the display name, email and date we just created.

        // If an error is thrown the catch block will catch it and console
        // log the error.
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    // If the user exists just return userDocRef.
    return userDocRef;
}