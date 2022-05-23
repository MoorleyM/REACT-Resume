import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

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

const googleProvider = new GoogleAuthProvider();
 
  // force to select an account
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

// Instiantiating the Database
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}
) => {

    // Getting doc ref, inside the db under user collection with user auth i.d.
    const userDocRef = doc(db, 'users', userAuth.uid);

    // console.log(userDocRef);

    // Snapshot is getting data, or specific object for user docs
    const userSnapshot = await getDoc(userDocRef);
    // console.log(userSnapshot);

    // Checking to see if user data exists
    // console.log(userSnapshot.exists());

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
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    // If the user exists just return userDocRef.
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    // If I don't get an email or password just return
    if(!email || !password) return;
    // If I do get an email and password return them.
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    // If I don't get an email or password just return
    if(!email || !password) return;
    // If I do get an email and password return them.
    return await signInWithEmailAndPassword(auth, email, password);
}

// Creating a method to sign out the user
export const signOutUser = async () => await signOut(auth);

// Leveraging an observer listener for sign in and sign out calls
export const onAuthStateChangedListener = (callback) => 
    onAuthStateChanged(auth, callback)