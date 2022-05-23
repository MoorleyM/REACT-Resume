import {
    createContext,
    useState,
    useEffect
} from 'react'

import { 
    onAuthStateChangedListener,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

// Actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {

    // Setting Null value for initial state
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser};

    // useEffect that listens and unlistens when the user signs in and out.
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserDocumentFromAuth(user);
            }
            // console.log(user);
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}