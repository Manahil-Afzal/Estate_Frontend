
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { API_BASE_URL } from "../config"; 
export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Update form data on input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
        
      setError(null);  
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true); 
  const { username, email, password } = formData; 
  if (!username || !email || !password) {
    setError("All fields are required");
    setLoading(false);
    return;
  }

   try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/signup`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});


    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Sign Up failed");
    console.log("Sign Up Success:", data);
    setLoading(false);
    navigate("/sign-in"); 
  } catch (err) {
    console.error("Sign Up Error:", err);
    setError(err.message);
    setLoading(false);
  }
};



  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background Video */}
      <video
        src="/MP3.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10"></div>

      {/* Sign Up Form */}
      <div className="relative bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl w-full max-w-lg">
        <h1 className="text-3xl text-center font-semibold my-7 text-gray-900">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
  type="text"
  placeholder="Username"
  className="border p-3 rounded-lg"
  id="username"
  value={formData.username || ""}
  onChange={handleChange}
/>
<input
  type="email"
  placeholder="Email"
  className="border p-3 rounded-lg"
  id="email"
  value={formData.email || ""}
  onChange={handleChange}
/>
<input
  type="password"
  placeholder="Password"
  className="border p-3 rounded-lg"
  id="password"
  value={formData.password || ""}
  onChange={handleChange}
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
          <p className="text-gray-700">Have an account?</p>
          <Link to="/sign-in">
            <span className="text-blue-700 font-semibold">Sign In</span>
          </Link>
        </div>

        {error && <p className="text-red-500 mt-5 text-center">{error}</p>}
      </div>
    </div>
  );
}




