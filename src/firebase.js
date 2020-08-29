import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDENcj0Wl0Ihpbae8X9T0NurkfWHnx1byM",
  authDomain: "think-piece-live-cddcb.firebaseapp.com",
  databaseURL: "https://think-piece-live-cddcb.firebaseio.com",
  projectId: "think-piece-live-cddcb",
  storageBucket: "think-piece-live-cddcb.appspot.com",
  messagingSenderId: "476939996126",
  appId: "1:476939996126:web:30c705106ba7908890ab4f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();
export default firebase;