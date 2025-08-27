


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import OAuth from "../components/OAuth";
import { API_BASE_URL } from "../config"; 





export default function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Update form data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Submit sign-in form
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());

    try {
     const res = await fetch(`${API_BASE_URL}/api/auth/signin`, {
  method: "POST",
  credentials: "include",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});



      const data = await res.json();

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/"); 
      } else {
        dispatch(signInFailure(data.message));
        alert(data.message);
      }
    } catch (err) {
      dispatch(signInFailure(err.message));
      console.error("Network error:", err);
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background Video */}
      <video
        src="/MP2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10"></div>

      {/* Sign In Form */}
      <div className="relative bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl w-full max-w-lg">
        <h1 className="text-3xl text-center font-semibold my-7 text-gray-900">
          Sign In
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            disabled={loading}
            className="bg-blue-600 text-white p-3 rounded-lg uppercase hover:bg-blue-500 disabled:opacity-70"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>

          <OAuth />
        </form>

        <div className="flex gap-2 mt-5 justify-center">
          <p className="text-gray-700">Don't have an account?</p>
          <Link to="/sign-up">
            <span className="text-blue-700 font-semibold">Sign Up</span>
          </Link>
        </div>

        {error && <p className="text-red-300 mt-3 text-center">{""}</p>}
      </div>
    </div>
  );
}




