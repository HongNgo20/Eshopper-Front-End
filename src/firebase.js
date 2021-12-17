import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig  = {
  apiKey: "AIzaSyC23TUvpWVXvfe_fUg5BkQ425HRTU-bwDQ",
  authDomain: "eshop-146ec.firebaseapp.com",
  projectId: "eshop-146ec",
  storageBucket: "eshop-146ec.appspot.com",
  messagingSenderId: "645757930528",
  appId: "1:645757930528:web:117cbd5f345bdfdab18045",
  measurementId: "G-CJ73MY03KT"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}

