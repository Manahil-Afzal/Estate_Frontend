import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { API_BASE_URL } from "../config";
import OAuth from "../components/OAuth";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const API_BASE_URL = "https://estate-backend.vercel.app/api";
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const payload = {
        username: formData.username, // match backend
        email: formData.email,
        password: formData.password,
      };

      const res = await fetch(`${API_BASE_URL}/auth/signup`,  {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
          credentials: "include",
      });


      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to sign up");

      navigate("/sign-in"); // redirect after success
    } catch (err) {
      setError(err?.message || "Sign Up failed");
      console.error("Sign Up Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <video
        src="/MP3.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10"></div>

      <div className="relative bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl w-full max-w-lg">
        <h1 className="text-3xl text-center font-semibold my-7 text-gray-900">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={formData.username || ""}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email || ""}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={formData.password || ""}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            disabled={loading}
            className="bg-blue-600 text-white p-3 rounded-lg uppercase hover:bg-blue-500 disabled:opacity-70"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>

          <OAuth />
        </form>

        <div className="flex gap-2 mt-5 justify-center">
          <p className="text-gray-700">Already have an account?</p>
          <Link to="/sign-in">
            <span className="text-blue-600 font-semibold">Sign In</span>
          </Link>
        </div>

        {error && <p className="text-red-500 mt-3 text-center">{error}</p>}
      </div>
    </div>
  );
}
