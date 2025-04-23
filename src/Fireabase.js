//initialize the firebase app
import {
    initializeApp
} from 'firebase/app'


import { getAuth ,GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_FIREABASE_API_KEY,
    authDomain: import.meta.env.VITE_REACT_FIREABASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_REACT_FIREABASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_REACT_FIREABASE_STOREAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_REACT_FIREABASE_messagingSenderId,
    appId: import.meta.env.VITE_REACT_FIREABASE_APP_ID,
};

const app = initializeApp(firebaseConfig)
export const auth=getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();