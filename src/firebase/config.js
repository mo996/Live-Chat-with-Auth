import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyATvv0oqh6BMyqNFUeDDslMllB9dbITaFo",

    authDomain: "blog-b435c.firebaseapp.com",

    projectId: "blog-b435c",

    storageBucket: "blog-b435c.appspot.com",

    messagingSenderId: "1042075018626",

    appId: "1:1042075018626:web:a399bfa283773342615b9b"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const projectFirestore = getFirestore(app);

// Initialize Auth
const projectAuth = getAuth(app);

export { projectFirestore, serverTimestamp, projectAuth };
