import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-indigo-600 to-teal-400 p-2 rounded-lg">
                <span className="text-white font-bold text-xl">📚</span>
              </div>
              <span className="font-bold text-xl">DailyGrowth</span>
            </div>
            <p className="text-gray-400">Improve 1% every day</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/?category=Healthy" className="hover:text-white transition">🌱 Healthy</Link></li>
              <li><Link to="/?category=Education" className="hover:text-white transition">📖 Education</Link></li>
              <li><Link to="/?category=Jobs" className="hover:text-white transition">💼 Jobs</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Get in Touch</h3>
            <Link to="/contact" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition inline-block">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} DailyGrowth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
