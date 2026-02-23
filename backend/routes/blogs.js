import express from 'express';
import Blog from '../models/Blog.js';
import User from '../models/User.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// GET all blogs with optional category filter
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    
    const blogs = await Blog.find(filter).sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET user bookmarks (protected route) - needs to be before /:id
router.get('/user/bookmarks', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId).populate('bookmarks');
    
    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json(user.bookmarks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET single blog by ID
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST like a blog (protected route)
router.post('/like/:id', authMiddleware, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    if (blog.likedBy.includes(req.userId)) {
      blog.likes -= 1;
      blog.likedBy = blog.likedBy.filter(id => id.toString() !== req.userId);
    } else {
      blog.likes += 1;
      blog.likedBy.push(req.userId);
    }

    await blog.save();
    res.json({ likes: blog.likes, liked: blog.likedBy.includes(req.userId) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST bookmark a blog (protected route)
router.post('/bookmark/:id', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    
    if (!user) return res.status(404).json({ error: 'User not found' });

    if (user.bookmarks.includes(req.params.id)) {
      user.bookmarks = user.bookmarks.filter(id => id.toString() !== req.params.id);
    } else {
      user.bookmarks.push(req.params.id);
    }

    await user.save();
    res.json({ bookmarked: user.bookmarks.includes(req.params.id) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
