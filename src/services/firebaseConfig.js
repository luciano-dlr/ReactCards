// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEDXIueuvN31MpghFj7mTuilSU91Q0UgM",
    authDomain: "tp-react-ec.firebaseapp.com",
    projectId: "tp-react-ec",
    storageBucket: "tp-react-ec.appspot.com",
    messagingSenderId: "1025625292007",
    appId: "1:1025625292007:web:4b1577700a16cd7679b642"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;