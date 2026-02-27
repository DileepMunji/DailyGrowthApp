import { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { blogAPI } from '../services/api';

export default function Home() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');

  const handleGetStarted = () => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    } else {
      navigate('/register');
    }
  };

  const categories = [
    { name: '', label: 'All', emoji: '📚' },
    { name: 'Healthy', label: 'Healthy', emoji: '🌱' },
    { name: 'Education', label: 'Education', emoji: '📖' },
    { name: 'Jobs', label: 'Jobs', emoji: '💼' },
  ];

  // Update navbar when home page loads (after login/register redirect)
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      window.dispatchEvent(new Event('authChange'));
    }
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        // Only pass category if it's not empty
        const response = await blogAPI.getAllBlogs(selectedCategory || null);
        setBlogs(response.data);
        setError('');
      } catch (err) {
        setError('Failed to load blogs');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-teal-400 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Improve 1% Every Day</h1>
            <p className="text-lg md:text-xl text-indigo-100 mb-8">
              Discover inspiring stories about healthy habits, education, and career growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="font-semibold">🌱 Healthy Living</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="font-semibold">📖 Education</p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="font-semibold">💼 Career Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">Featured Stories</h2>
            
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat.name || 'all'}
                  onClick={() => handleCategoryChange(cat.name)}
                  className={`px-4 md:px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === cat.name
                      ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-800 border-2 border-gray-300 hover:border-indigo-600 hover:text-indigo-600'
                  }`}
                >
                  {cat.emoji} {cat.label}
                </button>
              ))}
            </div>

            <p className="text-gray-600">
              {selectedCategory
                ? `Showing ${selectedCategory} stories`
                : 'Read inspiring stories in story-style format'}
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow animate-pulse h-96"></div>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg">
              {error}
            </div>
          )}

          {/* Blog Grid */}
          {!loading && blogs.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && blogs.length === 0 && !error && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No blogs available for this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Start Your Journey Today</h2>
          <p className="text-gray-600 mb-8">Join thousands of users improving themselves 1% every day</p>
          <button
            onClick={handleGetStarted}
            className="inline-block bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition cursor-pointer"
          >
            Get Started Free
          </button>
        </div>
      </section>
    </div>
  );
}
