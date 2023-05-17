// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyC81rxk4wromPhkid8HbuU-7LO5kzQ93CY',
	authDomain: 'autotel-e0a86.firebaseapp.com',
	projectId: 'autotel-e0a86',
	storageBucket: 'autotel-e0a86.appspot.com',
	messagingSenderId: '412412841285',
	appId: '1:412412841285:web:d38f8047bdf7b2848e422c',
	measurementId: 'G-ELK9T42T5X'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

const db = getFirestore(app);

export const blogCollectionReference = collection(db, 'posts');

export const storage = getStorage(app);
