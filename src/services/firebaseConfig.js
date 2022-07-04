// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEDXIueuvN31MpghFj7mTuilSU91Q0UgM",
    //apiKey:process.env.REACT_APP_apikey
    authDomain: "tp-react-ec.firebaseapp.com",
    //apiKey:process.env.REACT_APP_authDomain
    projectId: "tp-react-ec",
    //apiKey:process.env.REACT_APP_projectId
    storageBucket: "tp-react-ec.appspot.com",
    //apiKey:process.env.REACT_APP_storageBucket
    messagingSenderId: "1025625292007",
    //apiKey:process.env.REACT_APP_messagingSenderId
    appId: "1:1025625292007:web:4b1577700a16cd7679b642"
    //apiKey:process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;