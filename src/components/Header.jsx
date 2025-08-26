import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { FaSearch } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserSuccess } from '../redux/user/userSlice';


export default function Header() {
  const { currentUser } = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Sign-out function
  const handleSignOut = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/auth/signout', {
        method: 'GET',
        credentials: 'include', // important for cookies
      });

      const data = await res.json();
      console.log(data); // optional: view message from backend
      dispatch(signOutUserSuccess()); // clear Redux state
      navigate('/sign-in'); // redirect to sign-in page
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="bg-gray-700 text-white p-7 flex justify-between items-center shadow-md">
      {/* Logo */}
      <Link
        to="/"
        className="text-3xl font-extrabold tracking-wide text-transparent 
        bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500
        to-pink-500 drop-shadow-lg"
      >
        Shahand Estate
      </Link>

      {/* Search bar */}
      <form className="flex-col sm:flex-row mx-4 relative">
        <input
          type="text"
          placeholder="Search...."
          className="w-full border border-gray-100 rounded-md px-3 pr-10 py-1.5 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700"
        />
        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" />
      </form>

      {/* Navigation links */}
      <ul className='flex gap-4 mt-2 sm:mt-0 items-center'>
        <Link to='/'>
          <li className='hidden sm:inline text-slate-300 hover:underline'>Home</li>
        </Link> 
        <Link to='/about'>
          <li className='hidden sm:inline text-slate-300 hover:underline'>About</li>
        </Link> 
        
        {/* User profile / Sign in */}
        {currentUser ? (
          <li className="relative cursor-pointer">
            <img
              onClick={handleSignOut}
              className='rounded-full h-7 w-7 object-cover'
              src={currentUser?.avatar || "/Avatar1.png"}
              alt='profile'
              title="Click to sign out"
            />
          </li>
        ) : (
          <Link to='/sign-in'>
            <li className='text-slate-300 hover:underline'>Sign in</li>
          </Link>
        )}
      </ul>
    </header>
  );
}




