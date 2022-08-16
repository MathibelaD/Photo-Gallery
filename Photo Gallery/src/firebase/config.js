import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {getFirestore} from 'firebase/firestore';
//import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQUyHnXXM6hhviAT8B7caEpr6aoDlqVlc",
  authDomain: "photo-gallery-51750.firebaseapp.com",
  projectId: "photo-gallery-51750",
  storageBucket: "photo-gallery-51750.appspot.com",
  messagingSenderId: "876412763892",
  appId: "1:876412763892:web:c34a75f62a65ee5a78e8a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const projectStorage = firebase.storage();
const projectStorage = getStorage();
const projectFirestore = getFirestore();
//const projectFirestore = firebase.firestore();

export {projectFirestore, projectStorage};