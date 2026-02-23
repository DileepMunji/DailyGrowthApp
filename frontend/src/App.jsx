import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StoryViewer from './components/StoryViewer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Bookmarks from './pages/Bookmarks';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story/:id" element={<StoryViewer />} />
            <Route path="/categories" element={<div className="max-w-7xl mx-auto px-4 py-8">Categories - Coming Soon</div>} />
            <Route path="/about" element={<div className="max-w-7xl mx-auto px-4 py-8">About - Coming Soon</div>} />
            <Route path="/contact" element={<div className="max-w-7xl mx-auto px-4 py-8">Contact - Coming Soon</div>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
