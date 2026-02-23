import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogAPI } from '../services/api';
import BlogCard from '../components/BlogCard';

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Check authentication on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  // Fetch bookmarks
  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        setLoading(true);
        const response = await blogAPI.getBookmarks();
        setBookmarks(response.data || []);
        setError('');
      } catch (err) {
        setError('Failed to load bookmarks');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookmarks();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading bookmarks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">📚 My Bookmarks</h1>
        <p className="text-gray-600">Your saved stories for later reading</p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      {/* Empty State */}
      {bookmarks.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-5xl mb-4">📖</p>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">No bookmarks yet</h2>
          <p className="text-gray-500 mb-6">Start bookmarking your favorite stories to read them later!</p>
          <button
            onClick={() => navigate('/')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Explore Stories
          </button>
        </div>
      ) : (
        <>
          {/* Bookmarks Count */}
          <p className="text-gray-600 mb-6 font-semibold">
            {bookmarks.length} {bookmarks.length === 1 ? 'story' : 'stories'} bookmarked
          </p>

          {/* Bookmarks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {bookmarks.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
