import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  OAuthProvider // For Apple
} from 'firebase/auth';

// Firebase Configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Authentication Providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const appleProvider = new OAuthProvider('apple.com');

// Email Sign Up
function emailSignUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Email Login
function emailLogin(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Google Sign In
function googleSignIn() {
  return signInWithPopup(auth, googleProvider);
}

// GitHub Sign In
function githubSignIn() {
  return signInWithPopup(auth, githubProvider);
}

// Apple Sign In
function appleSignIn() {
  return signInWithPopup(auth, appleProvider);
}