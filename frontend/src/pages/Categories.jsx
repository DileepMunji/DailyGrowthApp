import { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { blogAPI } from '../services/api';
import BlogCard from '../components/BlogCard';

export default function Categories() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleGetStarted = () => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    } else {
      navigate('/register');
    }
  };
  const [error, setError] = useState('');

  const categories = [
    { id: 'Healthy', name: 'Health & Wellness', emoji: '🌱', color: 'from-green-400 to-emerald-600', desc: 'Tips for physical and mental well-being' },
    { id: 'Education', name: 'Education & Learning', emoji: '📖', color: 'from-blue-400 to-cyan-600', desc: 'Expand your knowledge and skills' },
    { id: 'Jobs', name: 'Career Development', emoji: '💼', color: 'from-orange-400 to-red-600', desc: 'Advance your professional growth' },
  ];

  // Fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await blogAPI.getAllBlogs();
        setBlogs(response.data || []);
        setError('');
      } catch (err) {
        setError('Failed to load categories');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  // Helper functions
  const getCategoryCount = (catId) => blogs.filter(b => b.category === catId).length;
  const getTrendingStories = (catId, limit = 3) => {
    return blogs
      .filter(b => catId === 'all' ? true : b.category === catId)
      .sort((a, b) => (b.likes || 0) - (a.likes || 0))
      .slice(0, limit);
  };
  const getTopRatedStory = (catId) => {
    const categoryBlogs = catId === 'all' ? blogs : blogs.filter(b => b.category === catId);
    return categoryBlogs.reduce((max, blog) => (blog.likes || 0) > (max.likes || 0) ? blog : max, categoryBlogs[0]);
  };
  const currentCategory = categories.find(c => c.id === selectedCategory);
  const trendingGlobal = getTrendingStories('all', 6);
  const totalStories = blogs.length;
  const totalLikes = blogs.reduce((sum, b) => sum + (b.likes || 0), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-r from-indigo-600/10 to-teal-400/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-6">
              <div className="text-6xl sm:text-7xl">🎓</div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Learning Paths
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-2">
              Curated collections designed to help you grow 1% every day
            </p>
            <p className="text-base text-gray-500">
              Explore trending content, top-rated stories, and personalized learning paths
            </p>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="relative -mt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-teal-400 bg-clip-text text-transparent">
                {totalStories}
              </div>
              <p className="text-gray-600 mt-2">Total Stories</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-teal-400 bg-clip-text text-transparent">
                {categories.length}
              </div>
              <p className="text-gray-600 mt-2">Learning Categories</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-teal-400 bg-clip-text text-transparent">
                {totalLikes}
              </div>
              <p className="text-gray-600 mt-2">Community Likes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured This Week (Trending Stories) */}
      {!loading && trendingGlobal.length > 0 && (
        <div className="py-16 sm:py-20 bg-gradient-to-r from-indigo-50 to-teal-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">🔥</span>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Trending This Week</h2>
                  <p className="text-gray-600">Most popular stories loved by our community</p>
                </div>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-teal-400"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {trendingGlobal.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Category Cards Overview */}
      <div className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">📚</span>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Browse Categories</h2>
                <p className="text-gray-600">Pick your learning path and dive in</p>
              </div>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-teal-400"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => {
              const topStory = getTopRatedStory(category.id);
              const count = getCategoryCount(category.id);
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`group text-left rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden cursor-pointer transform ${
                    selectedCategory === category.id ? 'ring-4 ring-indigo-600 scale-105' : 'hover:scale-105'
                  }`}
                >
                  <div className={`bg-gradient-to-br ${category.color} h-32 flex items-center justify-center relative overflow-hidden`}>
                    <span className="text-6xl group-hover:scale-110 transition duration-300">{category.emoji}</span>
                  </div>
                  <div className="bg-white p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{category.desc}</p>
                    <div className="space-y-3 pb-4 border-b">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Stories Available:</span>
                        <span className="font-bold text-indigo-600">{count}</span>
                      </div>
                      {topStory && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Top Rated:</span>
                          <span className="font-bold text-orange-500">❤️ {topStory.likes || 0}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs font-bold text-indigo-600">Explore Category</span>
                      <span className="text-lg">→</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Top Rated in Each Category */}
      <div className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">⭐</span>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Top Rated Stories</h2>
                <p className="text-gray-600">Highest rated story in each category</p>
              </div>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-teal-400"></div>
          </div>

          {!loading && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category) => {
                const topStory = getTopRatedStory(category.id);
                return topStory ? (
                  <div key={category.id} className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md hover:shadow-lg p-6 border-l-4 border-indigo-600">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-3xl">{category.emoji}</span>
                        <p className="text-xs text-gray-500 mt-1">{category.name}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-500">❤️</div>
                        <p className="text-sm font-bold text-gray-700">{topStory.likes || 0} likes</p>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{topStory.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{topStory.description}</p>
                    <Link
                      to={`/story/${topStory._id}`}
                      className="inline-block text-indigo-600 font-bold hover:text-indigo-700 transition"
                    >
                      Read Story →
                    </Link>
                  </div>
                ) : null;
              })}
            </div>
          )}
        </div>
      </div>

      {/* Learning Paths (Suggested Order) */}
      <div className="py-16 sm:py-20 bg-gradient-to-r from-indigo-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">🗺️</span>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Recommended Learning Paths</h2>
                <p className="text-gray-600">Suggested order to maximize your growth</p>
              </div>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-teal-400"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Path 1: Well-being & Productivity */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-500">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">💪</span>
                <h3 className="text-2xl font-bold text-gray-900">Wellness First</h3>
              </div>
              <p className="text-gray-600 mb-6">Start with health habits to build a strong foundation</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="font-bold text-green-600 w-8 h-8 flex items-center justify-center rounded-full bg-green-200">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Explore Health & Wellness</p>
                    <p className="text-xs text-gray-600">Build daily health habits</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="font-bold text-blue-600 w-8 h-8 flex items-center justify-center rounded-full bg-blue-200">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">Learn New Skills</p>
                    <p className="text-xs text-gray-600">Expand knowledge with education</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <div className="font-bold text-orange-600 w-8 h-8 flex items-center justify-center rounded-full bg-orange-200">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">Advance Your Career</p>
                    <p className="text-xs text-gray-600">Apply skills to career growth</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleCategoryChange('Healthy')}
                className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition"
              >
                Start Wellness Path
              </button>
            </div>

            {/* Path 2: Career First */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-500">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🚀</span>
                <h3 className="text-2xl font-bold text-gray-900">Career Growth</h3>
              </div>
              <p className="text-gray-600 mb-6">Focus on professional development and learning</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <div className="font-bold text-orange-600 w-8 h-8 flex items-center justify-center rounded-full bg-orange-200">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Develop Career Skills</p>
                    <p className="text-xs text-gray-600">Build professional foundation</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="font-bold text-blue-600 w-8 h-8 flex items-center justify-center rounded-full bg-blue-200">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">Enhance Your Knowledge</p>
                    <p className="text-xs text-gray-600">Strengthen expertise with learning</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="font-bold text-green-600 w-8 h-8 flex items-center justify-center rounded-full bg-green-200">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">Maintain Wellness</p>
                    <p className="text-xs text-gray-600">Balance with health practices</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleCategoryChange('Jobs')}
                className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition"
              >
                Start Career Path
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Details Section */}
      <div className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">📖</span>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What You'll Learn</h2>
                <p className="text-gray-600">Discover the topics covered in each category</p>
              </div>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-teal-400"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: '🌱',
                title: 'Health & Wellness',
                points: [
                  'Fitness and exercise routines',
                  'Mental health and meditation',
                  'Nutrition and healthy eating',
                  'Sleep optimization tips',
                  'Stress management techniques'
                ]
              },
              {
                emoji: '📖',
                title: 'Education & Learning',
                points: [
                  'Personal skill development',
                  'Technology and programming',
                  'Science and nature',
                  'History and culture',
                  'Language learning basics'
                ]
              },
              {
                emoji: '💼',
                title: 'Career Development',
                points: [
                  'Professional skills building',
                  'Leadership training',
                  'Interview preparation',
                  'Networking strategies',
                  'Career advancement tips'
                ]
              }
            ].map((cat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md hover:shadow-lg transition p-8 border-l-4 border-indigo-600">
                <div className="text-5xl mb-4">{cat.emoji}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.points.map((point, pidx) => (
                    <li key={pidx} className="flex items-start gap-3">
                      <span className="text-indigo-600 font-bold flex-shrink-0">✓</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 sm:py-20 bg-gradient-to-r from-indigo-600 to-teal-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Grow 1% Every Day?
          </h2>
          <p className="text-lg text-indigo-100 mb-10">
            Choose a learning path and start your journey to personal growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-block bg-white text-indigo-600 font-bold py-4 px-10 rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 shadow-lg"
            >
              Explore All Stories →
            </Link>
            <button
              onClick={handleGetStarted}
              className="inline-block bg-white/20 text-white font-bold py-4 px-10 rounded-lg border-2 border-white hover:bg-white/30 transition duration-300 backdrop-blur cursor-pointer"
            >
              Create Free Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
