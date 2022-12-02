import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBbS61RIXrIuUl0cM6WZCCZEkpvKACRpkg',
  authDomain: 'react-integrador.firebaseapp.com',
  projectId: 'react-integrador',
  storageBucket: 'react-integrador.appspot.com',
  messagingSenderId: '408039876696',
  appId: '1:408039876696:web:5df575b1a79267f345c22d',
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const singInWithGoogle = () => auth.signInWithPopup(provider);
