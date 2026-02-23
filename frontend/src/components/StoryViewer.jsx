import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogAPI } from '../services/api';

export default function StoryViewer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [autoPlay, setAutoPlay] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // Check authentication on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsAuthenticated(false);
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  // Fetch blog and all blogs for "Up Next"
  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const currentResponse = await blogAPI.getBlogById(id);
        setBlog(currentResponse.data);
        
        const allBlogsResponse = await blogAPI.getAllBlogs();
        setAllBlogs(allBlogsResponse.data);
        
        setCurrentSlide(0);
        setError('');
      } catch (err) {
        setError('Failed to load blog');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [id, isAuthenticated]);

  // Auto-play slides
  useEffect(() => {
    if (!autoPlay || !blog) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev >= blog.blogSlides.length - 1) {
          return prev;
        }
        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [autoPlay, blog]);

  if (loading) {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading story...</p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <p>{error || 'Blog not found'}</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 bg-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Find next blog
  const currentBlogIndex = allBlogs.findIndex(b => b._id === id);
  const nextBlog = currentBlogIndex < allBlogs.length - 1 ? allBlogs[currentBlogIndex + 1] : null;

  const slide = blog.blogSlides[currentSlide];
  const isLastSlide = currentSlide === blog.blogSlides.length - 1;
  const progress = ((currentSlide + 1) / blog.blogSlides.length) * 100;

  const handleNext = () => {
    if (!isLastSlide) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleClickZone = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const screenWidth = rect.width;

    if (clickX > screenWidth / 2) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  const handleUpNext = () => {
    if (nextBlog) {
      navigate(`/story/${nextBlog._id}`);
    }
  };

  // Guard: Show loading while checking auth
  if (!isAuthenticated) {
    return (
      <div className="w-full h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-semibold mb-4">Redirecting to login...</p>
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-teal-400 rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  // Guard: Show loading while fetching blog
  if (loading) {
    return (
      <div className="w-full h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-semibold mb-4">Loading story...</p>
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-teal-400 rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  // Guard: Show error if any
  if (error || !blog) {
    return (
      <div className="w-full h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-semibold text-red-400 mb-4">{error || 'Blog not found'}</p>
          <button
            onClick={() => navigate('/')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-black text-white overflow-hidden flex flex-col">
      {/* Close Button & Info Bar */}
      <div className="bg-black bg-opacity-50 px-4 py-3 flex items-center justify-between z-40">
        <button
          onClick={() => navigate('/')}
          className="text-2xl hover:scale-110 transition"
        >
          ✕
        </button>
        <div className="flex-1 mx-4">
          <p className="text-sm font-semibold truncate">{blog.title}</p>
          <p className="text-xs text-gray-400">By {blog.author}</p>
        </div>
        <div className="text-sm font-semibold">{currentSlide + 1} / {blog.blogSlides.length}</div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-gray-700">
        <div 
          className="h-full bg-gradient-to-r from-indigo-600 to-teal-400 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Main Story Area */}
      <div 
        className="flex-grow relative cursor-pointer overflow-hidden"
        onClick={handleClickZone}
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        {/* Background Image - Add key to force re-render on slide change */}
        <img
          key={`slide-${currentSlide}-${slide?.image}`}
          src={slide?.image || 'https://via.placeholder.com/1000x800'}
          alt={`slide-${currentSlide}`}
          className="w-full h-full object-cover transition-all duration-300"
          loading="eager"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/1000x800';
          }}
        />

        {/* Dark Overlay - Make it subtle */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

        {/* Slide Content - Positioned at bottom with better styling */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-16 sm:py-20 md:py-24">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold leading-relaxed text-white drop-shadow-xl text-center">
              {slide?.text ? slide.text.split('\n').slice(0, 2).filter(t => t.trim()).join('\n') : ''}
            </p>
          </div>
        </div>

        {/* Left Tap Area Indicator */}
        <div className="absolute left-0 top-0 w-1/4 h-full hover:bg-white hover:bg-opacity-5 transition">
          {currentSlide > 0 && (
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white opacity-0 hover:opacity-100 transition">
              ← Prev
            </div>
          )}
        </div>

        {/* Up Next Overlay (Last Slide) */}
        {isLastSlide && (
          <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-center">
              <p className="text-5xl mb-4">✨</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Story Complete!</h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">Amazing job reading this story. Keep improving 1% every day!</p>
              
              {nextBlog && (
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-indigo-50 to-teal-50 p-3 rounded-lg mb-4">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Up Next</p>
                    <p className="text-sm sm:text-base font-bold text-indigo-600">{nextBlog.category}</p>
                  </div>
                  <button
                    onClick={handleUpNext}
                    className="w-full bg-gradient-to-r from-indigo-600 to-teal-400 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:scale-105 transition transform"
                  >
                    📖 Continue Reading
                  </button>
                  <button
                    onClick={() => navigate('/')}
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition"
                  >
                    🏠 Back to Home
                  </button>
                </div>
              )}
              
              {!nextBlog && (
                <button
                  onClick={() => navigate('/')}
                  className="w-full bg-gradient-to-r from-indigo-600 to-teal-400 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition"
                >
                  🏠 Back to Home
                </button>
              )}
            </div>
          </div>
        )} 
      </div>

      {/* Mobile Controls */}
      <div className="bg-black bg-opacity-70 px-4 py-4 flex items-center justify-between md:hidden">
        <button
          onClick={handlePrev}
          disabled={currentSlide === 0}
          className="px-4 py-2 bg-indigo-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 transition"
        >
          ← Previous
        </button>
        <span className="text-sm font-semibold">{currentSlide + 1} / {blog.blogSlides.length}</span>
        <button
          onClick={handleNext}
          disabled={isLastSlide}
          className="px-4 py-2 bg-indigo-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 transition"
        >
          Next →
        </button>
      </div>

      {/* Auto-play Toggle */}
      <div className="hidden md:block absolute bottom-4 right-4 z-30">
        <button
          onClick={() => setAutoPlay(!autoPlay)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
        >
          {autoPlay ? '⏸ Pause' : '▶ Play'}
        </button>
      </div>
    </div>
  );
}
