
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { signOutUserSuccess } from "../redux/user/userSlice";
import { API_BASE_URL } from "../config";

export default function Header() {
  const currentUser = useSelector((state) => state.user?.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const API_BASE_URL = "https://estate-backend.vercel.app/api";
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const handleSearchChange = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 1) {
      try {
        const res = await fetch(`${API_BASE_URL}/listings?search=${value}`);
        if (!res.ok) {
          setResults([]);
          return;
        }
        const data = await res.json();
        setResults(data);
      } catch (err) {
        console.error("Search error:", err);
        setResults([]);
      }
    } else {
      setResults([]);
    }
  };
  const handleSignOut = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/signout`, {
        method: "GET",
        credentials: "include",
      });
      if (!res.ok) {
        console.error("Sign out failed");
      }
      dispatch(signOutUserSuccess());
      navigate("/sign-in");
    } catch (err) {
      console.error("Sign out error:", err);
    }
  };

  return (
    <header className="bg-gray-700 text-white p-7 flex justify-between items-center shadow-md">
      <Link
        to="/"
        className="text-3xl font-extrabold tracking-wide text-transparent 
                   bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500
                   to-pink-500 drop-shadow-lg"
      >
        Shahand Estate
      </Link>
      <div className="relative mx-4 w-1/3">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full border border-gray-100 rounded-md px-3 pr-10 py-1.5 
                     text-white placeholder-gray-300 focus:outline-none focus:ring-2 
                     focus:ring-blue-500 bg-gray-700"
        />
        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" />

        {results.length > 0 && (
          <ul className="absolute top-full left-0 w-full bg-white text-black rounded-md shadow-lg z-50 mt-1 max-h-60 overflow-y-auto">
            {results.map((item) => (
              <li
                key={item._id}
                className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  navigate(`/listing/${item._id}`);
                  setResults([]);
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <ul className="flex gap-4 mt-2 sm:mt-0 items-center">
        <Link to="/"><li className="hidden sm:inline text-slate-300 hover:underline">Home</li></Link>
        <Link to="/about"><li className="hidden sm:inline text-slate-300 hover:underline">About</li></Link>
        
        <li>
          {!currentUser ? (
            <Link
              to="/sign-in"
              className="text-slate-300 hover:underline"
            >
              Sign In
            </Link>
          ) : (
            <button
              onClick={handleSignOut}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white"
              title="Sign out"
            >
              {currentUser.name ? currentUser.name[0] : "U"}
            </button>
          )}
        </li>
      </ul>
    </header>
  );
}
