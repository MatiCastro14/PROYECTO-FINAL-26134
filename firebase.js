// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmLFk0HC2tVEQ3QUSOuWigpXm9inTNGy4",
  authDomain: "crud-nodejs-firebase-261-c95db.firebaseapp.com",
  projectId: "crud-nodejs-firebase-261-c95db",
  storageBucket: "crud-nodejs-firebase-261-c95db.firebasestorage.app",
  messagingSenderId: "601277159348",
  appId: "1:601277159348:web:1cdf8e4042051a41a604e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;