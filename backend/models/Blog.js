import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Healthy', 'Education', 'Jobs'],
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  blogSlides: [{
    image: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  }],
  likes: {
    type: Number,
    default: 0,
  },
  likedBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Blog', blogSchema);
