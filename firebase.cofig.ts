import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4nKMc9BX0eIBqf_x-414WvTVvEGNTU4o",
  authDomain: "swicthathon.firebaseapp.com",
  projectId: "swicthathon",
  storageBucket: "swicthathon.appspot.com",
  messagingSenderId: "909385998143",
  appId: "1:909385998143:web:39bb19afcecbeb4d27bd8a",
  measurementId: "G-EJF5GLHC9N",
};

export const app = initializeApp(firebaseConfig);

export const firebaseDB = getFirestore(app);


