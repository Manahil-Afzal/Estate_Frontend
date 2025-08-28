import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { API_BASE_URL } from "../config";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const navigate = useNavigate();

  const handleGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Send user info to backend
      const res = await fetch(`${API_BASE_URL}/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Google login failed");

      navigate("/"); // Redirect after login
    } catch (err) {
      console.error("Google login error:", err);
      alert(err.message || "Google login failed");
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogle}
      className="flex items-center justify-center gap-2 mt-3 border p-2 rounded-lg hover:bg-gray-100"
    >
      <FcGoogle size={24} />
      Continue with Google
    </button>
  );
}
