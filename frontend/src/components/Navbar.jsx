import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-indigo-600 to-teal-400 p-2 rounded-lg">
              <span className="text-white font-bold text-xl">📚</span>
            </div>
            <span className="font-bold text-xl text-gray-800 hidden sm:inline">DailyGrowth</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition">Home</Link>
            <Link to="/categories" className="text-gray-700 hover:text-indigo-600 transition">Categories</Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {token ? (
              <>
                <Link to="/bookmarks" className="text-gray-700 hover:text-indigo-600 transition">
                  💎 Bookmarks
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-indigo-600 hover:text-indigo-700 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-4 border-t border-gray-200">
            <Link to="/" className="block px-2 py-2 text-gray-700 hover:bg-gray-100 rounded">Home</Link>
            <Link to="/categories" className="block px-2 py-2 text-gray-700 hover:bg-gray-100 rounded">Categories</Link>
            <Link to="/about" className="block px-2 py-2 text-gray-700 hover:bg-gray-100 rounded">About</Link>
            <Link to="/contact" className="block px-2 py-2 text-gray-700 hover:bg-gray-100 rounded">Contact</Link>
            
            {token ? (
              <>
                <Link to="/bookmarks" className="block px-2 py-2 text-gray-700 hover:bg-gray-100 rounded">
                  💎 Bookmarks
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-2 py-2 text-indigo-600 hover:bg-gray-100 rounded"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block w-full mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition text-center"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
