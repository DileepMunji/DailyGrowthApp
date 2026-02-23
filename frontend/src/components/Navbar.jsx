import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const token = localStorage.getItem('token');
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;

  const getInitials = (name) => {
    if (!name) return '?';
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsProfileOpen(false);
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

          {/* Auth Buttons & Profile */}
          <div className="hidden md:flex items-center space-x-4 relative">
            {token && user ? (
              <>
                <Link to="/bookmarks" className="text-gray-700 hover:text-indigo-600 transition">
                  💎 Bookmarks
                </Link>
                
                {/* Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center space-x-2 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-teal-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {getInitials(user.name)}
                    </div>
                    <span className="text-gray-700 font-medium text-sm hidden sm:inline">{user.name}</span>
                    <svg className={`w-4 h-4 text-gray-700 transition ${isProfileOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                  
                  {/* Profile Menu */}
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-3 z-50 border border-gray-100">
                      <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                        <p className="text-sm font-bold text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-600 mt-0.5">{user.email}</p>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-3 mt-2 mb-1 flex items-center space-x-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-200 text-sm font-medium"
                      >
                        <span className="text-lg">🚪</span>
                        <span>Logout</span>
                      </button>
                    </div>
                  )}
                </div>
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
            
            {token && user ? (
              <>
                <Link to="/bookmarks" className="block px-2 py-2 text-gray-700 hover:bg-gray-100 rounded">
                  💎 Bookmarks
                </Link>
                
                {/* Mobile Profile */}
                <div className="border-t border-gray-200 mt-4 pt-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-3 mx-2">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-teal-400 rounded-full flex items-center justify-center text-white font-semibold">
                      {getInitials(user.name)}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-600">{user.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-lg transition duration-200 text-sm font-semibold flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                  >
                    <span className="text-lg">🚪</span>
                    <span>Logout</span>
                  </button>
                </div>
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
