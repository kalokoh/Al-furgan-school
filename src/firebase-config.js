// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyADKwgk02aC9Rj__PE6dTLzKnzbDXlfBJI",
    authDomain: "al-furqan-c1bb4.firebaseapp.com",
    projectId: "al-furqan-c1bb4",
    storageBucket: "al-furqan-c1bb4.appspot.com",
    messagingSenderId: "26307781382",
    appId: "1:26307781382:web:2013780b1ba5b0ccac3487"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app
