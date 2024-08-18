import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCBIIl1XVvprUH35biQTazVjLYJOz8vP5s",
  authDomain: "chatapp-3d091.firebaseapp.com",
  projectId: "chatapp-3d091",
  storageBucket: "chatapp-3d091.appspot.com",
  messagingSenderId: "58157813245",
  appId: "1:58157813245:web:947af519396afc55c81d94",
  measurementId: "G-R7K33RL0PQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
