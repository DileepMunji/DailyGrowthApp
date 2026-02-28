import { Link, useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    } else {
      navigate('/register');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section with Animation */}
      <div className="relative overflow-hidden py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo Animation */}
            <div className="inline-block mb-8 transform hover:scale-110 transition duration-300">
              <div className="bg-gradient-to-br from-indigo-600 via-purple-500 to-teal-400 p-4 sm:p-6 rounded-2xl shadow-2xl">
                <span className="text-5xl sm:text-6xl md:text-7xl block">📚</span>
              </div>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              DailyGrowth
            </h1>
            
            {/* Tagline with Gradient */}
            <p className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-teal-400 bg-clip-text text-transparent mb-6">
              Improve 1% Every Day
            </p>
            
            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Transform your daily moments into meaningful learning experiences. Join thousands growing smarter, healthier, and more successful.
            </p>

            {/* CTA Button */}
            <button
              onClick={handleGetStarted}
              className="inline-block bg-gradient-to-r from-indigo-600 to-teal-400 text-white font-bold py-3 px-8 rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 shadow-lg cursor-pointer"
            >
              Start Your Journey →
            </button>
          </div>
        </div>
      </div>

      {/* Mission Section with Better Styling */}
      <div className="py-16 sm:py-20 bg-gradient-to-r from-indigo-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-teal-400 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 text-3xl mr-4">🎯</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Small Steps, Big Results</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We believe that small, consistent improvements compound into remarkable transformations. Each story brings you closer to your goals.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 text-3xl mr-4">✨</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Personalized Learning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Whether you want to improve your health, expand your education, or advance your career—we have stories tailored for your unique journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore Our Categories
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-teal-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1 */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 h-32 flex items-center justify-center">
                <span className="text-6xl">🌱</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition">
                  Health & Wellness
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Learn practical tips to improve your physical and mental well-being, one story at a time.
                </p>
                <div className="text-sm font-semibold text-indigo-600">6 Stories →</div>
              </div>
            </div>

            {/* Category 2 */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">
              <div className="bg-gradient-to-br from-blue-400 to-cyan-500 h-32 flex items-center justify-center">
                <span className="text-6xl">📖</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition">
                  Education & Learning
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Expand your knowledge across diverse topics with engaging, bite-sized educational content.
                </p>
                <div className="text-sm font-semibold text-indigo-600">6 Stories →</div>
              </div>
            </div>

            {/* Category 3 */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 h-32 flex items-center justify-center">
                <span className="text-6xl">💼</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition">
                  Career Development
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Master professional skills and advance your career with daily learning from industry experts.
                </p>
                <div className="text-sm font-semibold text-indigo-600">6 Stories →</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Story Format Section */}
      <div className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Story Format?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-teal-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: '📖', title: 'Immersive Experience', desc: 'Like Instagram Stories, but educational. Engaging, interactive, and keeps you focused.' },
              { icon: '⏱️', title: 'Perfect Pacing', desc: 'Quick enough to fit into your busy day, deep enough to provide real, actionable value.' },
              { icon: '🎯', title: 'Focused Content', desc: 'Each slide delivers actionable insights without overwhelming information overload.' },
              { icon: '💾', title: 'Save & Revisit', desc: 'Bookmark your favorites to review anytime and track your learning journey over time.' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:bg-indigo-50 transition">
                <div className="flex-shrink-0 text-4xl">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section with Better Design */}
      <div className="py-16 sm:py-20 bg-gradient-to-r from-indigo-600 to-teal-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-bold text-white mb-3">18+</div>
              <p className="text-xl text-white/90 font-semibold">Stories Available</p>
              <p className="text-sm text-white/70 mt-1">Handpicked & curated</p>
            </div>
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-bold text-white mb-3">3</div>
              <p className="text-xl text-white/90 font-semibold">Learning Categories</p>
              <p className="text-sm text-white/70 mt-1">Health, Education, Career</p>
            </div>
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-bold text-white mb-3">∞</div>
              <p className="text-xl text-white/90 font-semibold">Your Growth Potential</p>
              <p className="text-sm text-white/70 mt-1">Unlimited possibilities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-teal-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: '✨', title: 'Excellence', desc: 'High-quality content from experts' },
              { emoji: '🎯', title: 'Accessibility', desc: 'Learning for everyone, everywhere' },
              { emoji: '🚀', title: 'Innovation', desc: 'Continuously evolving for you' },
              { emoji: '❤️', title: 'Community', desc: 'United in self-improvement' },
            ].map((val, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg hover:scale-105 transition duration-300 text-center">
                <div className="text-5xl mb-4">{val.emoji}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{val.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Growing?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of people transforming their lives, one story at a time. Start with free access to all our stories today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGetStarted}
              className="inline-block bg-gradient-to-r from-indigo-600 to-teal-400 text-white font-bold py-4 px-10 rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 shadow-lg cursor-pointer"
            >
              Get Started Free →
            </button>
            <Link
              to="/"
              className="inline-block bg-white text-indigo-600 font-bold py-4 px-10 rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition duration-300"
            >
              Explore Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

