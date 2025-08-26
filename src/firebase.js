// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";  // ✅ make sure this is here

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB8O2hxse8iL8sc912Fnwv7nrbJCZqoqtE",
  authDomain: "real-estate-9ac0b.firebaseapp.com",
  projectId: "real-estate-9ac0b",
  storageBucket: "real-estate-9ac0b.appspot.com",
  messagingSenderId: "965893112707",
  appId: "1:965893112707:web:542ecb45735f236b95ecb6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exports
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);

export { app };        // optional (only if you really need it somewhere else)
export default app;    // optional, you can remove if not needed
