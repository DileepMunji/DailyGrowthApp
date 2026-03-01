import { useNavigate } from 'react-router-dom';

export default function BlogCard({ blog }) {
  const navigate = useNavigate();

  // Get first slide image and text
  const firstSlide = blog.blogSlides[0];
  const description = blog.blogSlides[1]?.text.split('\n')[0] || 'Read this amazing story...';

  // Category colors
  const categoryColors = {
    Healthy: 'bg-green-100 text-green-800',
    Education: 'bg-blue-100 text-blue-800',
    Jobs: 'bg-orange-100 text-orange-800',
  };

  const categoryEmojis = {
    Healthy: '🌱',
    Education: '📖',
    Jobs: '💼',
  };

  const handleReadMore = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/story/${blog._id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col group">
      {/* Image Container */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-gray-200 group-hover:opacity-90 transition">
        <img
          src={firstSlide?.image || 'https://via.placeholder.com/400x300'}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300';
          }}
        />
        {/* Category Badge */}
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-semibold ${categoryColors[blog.category]}`}>
          {categoryEmojis[blog.category]} {blog.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5 flex-grow flex flex-col">
        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-indigo-600 transition">
          {blog.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-2 flex-grow">
          {description}
        </p>

        {/* Author & Slides Info */}
        <div className="flex items-center justify-between text-xs md:text-sm text-gray-500 mb-4 pb-4 border-b border-gray-200">
          <span>By {blog.author}</span>
          <span>📖 {blog.blogSlides.length} slides</span>
        </div>

        {/* Read More Button */}
        <button
          onClick={handleReadMore}
          className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold py-2 rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105"
        >
          Read Story →
        </button>
      </div>
    </div>
  );
}
