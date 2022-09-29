import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyANJzT4-BsqdJrRrTHzX9vAAAusJwXpMd0',
  authDomain: 'house-marketplace-app-2b5fc.firebaseapp.com',
  projectId: 'house-marketplace-app-2b5fc',
  storageBucket: 'house-marketplace-app-2b5fc.appspot.com',
  messagingSenderId: '527572105222',
  appId: '1:527572105222:web:f3f7db4126117ac8c8eb87',
};

// Initialize Firebase

initializeApp(firebaseConfig);

export const db = getFirestore();
// Comment
