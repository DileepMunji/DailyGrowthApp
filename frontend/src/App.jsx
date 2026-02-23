import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<div className="max-w-7xl mx-auto px-4 py-8">Home Page - Coming Soon</div>} />
            <Route path="/categories" element={<div className="max-w-7xl mx-auto px-4 py-8">Categories - Coming Soon</div>} />
            <Route path="/about" element={<div className="max-w-7xl mx-auto px-4 py-8">About - Coming Soon</div>} />
            <Route path="/contact" element={<div className="max-w-7xl mx-auto px-4 py-8">Contact - Coming Soon</div>} />
            <Route path="/login" element={<div className="max-w-7xl mx-auto px-4 py-8">Login - Coming Soon</div>} />
            <Route path="/register" element={<div className="max-w-7xl mx-auto px-4 py-8">Register - Coming Soon</div>} />
            <Route path="/bookmarks" element={<div className="max-w-7xl mx-auto px-4 py-8">Bookmarks - Coming Soon</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
