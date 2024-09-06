// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBYH97ayFrTntOBMDmVaz_n9m6rKfXPfD4",
    authDomain: "jont-3167f.firebaseapp.com",
    projectId: "jont-3167f",
    storageBucket: "jont-3167f.appspot.com",
    messagingSenderId: "325466091498",
    appId: "1:325466091498:web:c880adcdd874f28896cc93",
    measurementId: "G-20G1ED28C2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
