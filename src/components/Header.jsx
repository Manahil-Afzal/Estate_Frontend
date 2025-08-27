import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { FaSearch } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserSuccess } from '../redux/user/userSlice';
import { API_BASE_URL } from '../config'; 

export default function Header() {
  const { currentUser } = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSignOut = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/signout`, {
        method: 'GET',
        credentials: 'include',
      });
      const data = await res.json();
      console.log(data);
      dispatch(signOutUserSuccess());
      navigate('/sign-in');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Dynamic search
  const handleSearchChange = async (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length > 1) {
      try {
        const res = await fetch(`${API_BASE_URL}/api/listings?search=${e.target.value}`);
        const data = await res.json();
        setResults(data);
      } catch (err) {
        console.error('Search failed:', err);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <header className="bg-gray-700 text-white p-7 flex justify-between items-center shadow-md">
      <Link to="/" className="text-3xl font-extrabold tracking-wide text-transparent 
        bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500
        to-pink-500 drop-shadow-lg">
        Shahand Estate
      </Link>

      {/* Search bar */}
      <div className="relative mx-4">
        <input
          type="text"
          placeholder="Search...."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full border border-gray-100 rounded-md px-3 pr-10 py-1.5 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700"
        />
        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" />

        {/* Search results dropdown */}
        {results.length > 0 && (
          <ul className="absolute top-full left-0 w-full bg-white text-black rounded-md shadow-lg z-50 mt-1 max-h-60 overflow-y-auto">
            {results.map(item => (
              <li key={item._id} className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => navigate(`/listing/${item._id}`)}>
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Navigation */}
      <ul className='flex gap-4 mt-2 sm:mt-0 items-center'>
        <Link to='/'><li className='hidden sm:inline text-slate-300 hover:underline'>Home</li></Link> 
        <Link to='/about'><li className='hidden sm:inline text-slate-300 hover:underline'>About</li></Link> 
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
