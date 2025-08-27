// src/components/OAuth.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { signInSuccess } from "../redux/user/userSlice";
import { API_BASE_URL } from "../config";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      // Sign in with Firebase
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/google`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      }),
      credentials: "include",
    });

    const data = await res.json();
    console.log("Backend Response:", data);

      // Update Redux state
     dispatch(signInSuccess(data));
      // Redirect after login
      navigate("/");
    } catch (error) {
      console.error("Google Sign In Error:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="bg-red-500 text-white p-2 rounded-lg w-full flex items-center justify-center gap-2 mt-4 hover:bg-red-600 transition-colors"
    >
      <FcGoogle size={20} />
      Continue with Google
    </button>
  );
}
