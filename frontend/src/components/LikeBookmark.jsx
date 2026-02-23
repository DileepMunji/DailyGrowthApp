import { useState, useEffect } from 'react';
import { blogAPI } from '../services/api';

export default function LikeBookmark({ blogId, initialLikes = 0, initialLikedBy = [] }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [userBookmarks, setUserBookmarks] = useState([]);

  const userId = (() => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr).id : null;
  })();

  // Fetch user's bookmarks on mount
  useEffect(() => {
    const fetchBookmarks = async () => {
      if (!userId) return;
      try {
        const response = await blogAPI.getBookmarks();
        const bookmarkIds = response.data.map(blog => blog._id);
        setUserBookmarks(bookmarkIds);
        setIsBookmarked(bookmarkIds.includes(blogId));
      } catch (err) {
        console.error('Failed to fetch bookmarks:', err);
      }
    };
    fetchBookmarks();
  }, [userId, blogId]);

  // Check if current user liked this blog
  useEffect(() => {
    if (userId && initialLikedBy) {
      setIsLiked(initialLikedBy.includes(userId));
    }
  }, [blogId, userId, initialLikedBy]);

  const handleLike = async () => {
    if (!userId) {
      setError('Please login to like blogs');
      setTimeout(() => setError(''), 3000);
      return;
    }

    setLoading(true);
    try {
      const response = await blogAPI.likeBlog(blogId);
      setIsLiked(response.data.liked);
      setError('');
    } catch (err) {
      setError('Failed to like blog');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleBookmark = async () => {
    if (!userId) {
      setError('Please login to bookmark blogs');
      setTimeout(() => setError(''), 3000);
      return;
    }

    setLoading(true);
    try {
      const response = await blogAPI.bookmarkBlog(blogId);
      setIsBookmarked(response.data.bookmarked);
      
      // Update local bookmarks list
      if (response.data.bookmarked) {
        setUserBookmarks([...userBookmarks, blogId]);
      } else {
        setUserBookmarks(userBookmarks.filter(id => id !== blogId));
      }
      setError('');
    } catch (err) {
      setError('Failed to bookmark blog');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
      {/* Like Button */}
      <button
        onClick={handleLike}
        disabled={loading}
        className="group relative flex flex-col items-center gap-1.5 transition-all duration-200"
        title={userId ? 'Like this blog' : 'Login to like'}
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 group-hover:scale-110 active:scale-95 shadow-lg border border-white/20 disabled:opacity-50"
             style={{ opacity: loading ? 0.5 : 1 }}>
          <span className="text-3xl sm:text-4xl md:text-5xl drop-shadow-lg select-none">
            {isLiked ? '❤️' : '🤍'}
          </span>
        </div>
        <span className="text-xs sm:text-sm font-semibold text-white drop-shadow-lg">Like</span>
      </button>

      {/* Bookmark Button */}
      <button
        onClick={handleBookmark}
        disabled={loading}
        className="group relative flex flex-col items-center gap-1.5 transition-all duration-200"
        title={userId ? 'Bookmark this blog' : 'Login to bookmark'}
      >
        <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full backdrop-blur-sm transition-all duration-200 group-hover:scale-110 active:scale-95 shadow-lg border group-hover:shadow-xl ${
          isBookmarked
            ? 'bg-yellow-400/30 hover:bg-yellow-400/40 border-yellow-300/50'
            : 'bg-white/10 hover:bg-white/20 border-white/20'
        } disabled:opacity-50`}
             style={{ opacity: loading ? 0.5 : 1 }}>
          <span className="text-3xl sm:text-4xl md:text-5xl drop-shadow-lg select-none">
            {isBookmarked ? '⭐' : '☆'}
          </span>
        </div>
        <span className="text-xs sm:text-sm font-semibold text-white drop-shadow-lg">
          {isBookmarked ? 'Saved' : 'Save'}
        </span>
      </button>

      {/* Error Message */}
      {error && (
        <div className="col-span-full text-xs sm:text-sm text-red-200 bg-red-900/70 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full whitespace-nowrap">
          {error}
        </div>
      )}
    </div>
  );
}
