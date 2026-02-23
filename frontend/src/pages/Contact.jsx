import { useState } from 'react';
import { contactAPI } from '../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('All fields are required');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await contactAPI.sendMessage(formData);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-r from-indigo-600/10 to-teal-400/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-6">
              <div className="text-6xl sm:text-7xl">💌</div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-2">
              Have questions, feedback, or suggestions? We'd love to hear from you!
            </p>
            <p className="text-base text-gray-500">
              Our team typically responds within 24 hours
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 overflow-hidden">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-20 flex items-center justify-center">
                <span className="text-5xl">📧</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">
                  Email
                </h3>
                <p className="text-gray-600 mb-4">Send us a message anytime</p>
                <a 
                  href="mailto:hello@dailygrowth.com"
                  className="text-indigo-600 hover:text-indigo-700 font-bold text-lg break-all"
                >
                  hello@dailygrowth.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 overflow-hidden">
              <div className="bg-gradient-to-br from-green-400 to-emerald-600 h-20 flex items-center justify-center">
                <span className="text-5xl">📱</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">
                  Phone
                </h3>
                <p className="text-gray-600 mb-4">Weekdays 9 AM - 5 PM EST</p>
                <a 
                  href="tel:+1234567890"
                  className="text-indigo-600 hover:text-indigo-700 font-bold text-lg"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 overflow-hidden">
              <div className="bg-gradient-to-br from-purple-400 to-pink-600 h-20 flex items-center justify-center">
                <span className="text-5xl">⏱️</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">
                  Response Time
                </h3>
                <p className="text-gray-600 mb-4">We value your time</p>
                <p className="text-indigo-600 font-bold text-lg">
                  24 Hours Max
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Send us a Message</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-teal-400 mx-auto"></div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
              {/* Success Message */}
              {success && (
                <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded-lg flex items-start gap-3">
                  <span className="text-2xl mt-0.5">✓</span>
                  <div>
                    <p className="font-bold">Message sent successfully!</p>
                    <p className="text-sm">We'll get back to you soon. Thank you for reaching out!</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-lg flex items-start gap-3">
                  <span className="text-2xl mt-0.5">×</span>
                  <div>
                    <p className="font-bold">Error</p>
                    <p className="text-sm">{error}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition hover:border-gray-300"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition hover:border-gray-300"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-3">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    rows="7"
                    className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition resize-none hover:border-gray-300"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-indigo-600 to-teal-400 text-white font-bold py-4 rounded-lg hover:shadow-2xl hover:scale-105 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 text-lg"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin">⌛</span> Sending...
                    </span>
                  ) : (
                    'Send Message →'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 sm:py-20 bg-gradient-to-r from-indigo-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-teal-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                emoji: '📚',
                q: 'How do I bookmark a story?',
                a: 'While reading any story, click the bookmark button to save it. Your saved stories will appear in your "My Bookmarks" section for easy access anytime.'
              },
              {
                emoji: '❤️',
                q: 'Can I like and unlike stories?',
                a: 'Yes! Click the heart icon to like any story. You can unlike it anytime by clicking again. Your likes help us understand what content resonates with you.'
              },
              {
                emoji: '📅',
                q: 'How often are new stories added?',
                a: 'We\'re constantly expanding our library with fresh content. Check back regularly or create an account to get notifications about new stories in your favorite categories.'
              },
              {
                emoji: '💰',
                q: 'Is DailyGrowth free?',
                a: 'Absolutely! DailyGrowth is completely free. Simply create an account and you\'ll have instant access to all our stories and learning content.'
              },
              {
                emoji: '✍️',
                q: 'Can I write my own stories?',
                a: 'Currently, all stories are curated by our expert team. However, we\'re always open to suggestions and feedback. Feel free to reach out with your ideas!'
              },
              {
                emoji: '🔐',
                q: 'How do I reset my password?',
                a: 'On the login page, click "Forgot Password?" and follow the instructions sent to your email. If you need help, don\'t hesitate to contact us directly!'
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 sm:p-8 border-l-4 border-indigo-600 hover:border-teal-400">
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{faq.emoji}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Have more questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Fill out the form above and we'll get back to you as soon as possible. We're here to help!
          </p>
          <div className="flex justify-center">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-100 to-teal-100 rounded-lg border-2 border-indigo-200">
              <p className="text-sm font-semibold text-indigo-900">
                💡 Tip: Check the FAQ first - your question might be answered there!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
