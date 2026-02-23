import axios from 'axios';

const API_BASE_URL = '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
};

export const blogAPI = {
  getAllBlogs: (category) => api.get('/blogs', { params: { category } }),
  getBlogById: (id) => api.get(`/blogs/${id}`),
  likeBlog: (id) => api.post(`/blogs/like/${id}`),
  bookmarkBlog: (id) => api.post(`/blogs/bookmark/${id}`),
  getBookmarks: () => api.get('/blogs/user/bookmarks'),
};

export const contactAPI = {
  sendMessage: (data) => api.post('/contact', data),
};

export default api;
