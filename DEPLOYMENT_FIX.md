# 🚀 DailyGrowth App - Deployment Guide

## Fix Summary (404 Errors Resolved)

### Issues Fixed:
1. ✅ **Anchor tag navigation** - Replaced `<a href>` with React Router `<Link>` component
2. ✅ **Environment variables** - Created `.env.local` and updated `.env.production`
3. ✅ **Vercel configuration** - Updated `vercel.json` with proper rewrites and caching headers

---

## 📋 Pre-Deployment Checklist

### Frontend (.env.production)
```dotenv
VITE_API_URL=https://your-backend-url.com/api
```
Make sure to replace with your actual backend URL (from Render, Railway, etc.)

### Backend Environment Variables
```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=production
```

---

## 🔴 404 Error Root Causes & Fixes

### Problem 1: Page Refresh 404
**Cause:** Using `<a href>` instead of React Router `<Link>`
**Fix:** ✅ Changed Home.jsx CTA button to use `<Link to="/register">`

### Problem 2: Route Navigation 404  
**Cause:** SPA routes not being rewritten to index.html
**Fix:** ✅ Updated `vercel.json` with proper rewrite rules

### Problem 3: Production API Calls 404
**Cause:** API requests going to `localhost:5001` on production
**Fix:** ✅ Set `VITE_API_URL` environment variable in `.env.production`

---

## 📦 Deployment Steps

### Option 1: Deploy to Vercel

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Fix 404 errors and deployment config"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repo
   - Choose "Frontend" as the root directory

3. **Set Environment Variables in Vercel Dashboard**
   - Go to Project Settings → Environment Variables
   - Add: `VITE_API_URL=https://your-backend-url.com/api`

4. **Deploy**
   - Vercel will automatically build and deploy

### Option 2: Deploy to Netlify

1. **Update netlify.toml** (if deploying to Netlify instead)
   ```toml
   [build]
   command = "npm run build"
   publish = "dist"

   [[redirects]]
   from = "/*"
   to = "/index.html"
   status = 200
   ```

2. **Add to Netlify Environment Variables**
   - `VITE_API_URL=https://your-backend-url.com/api`

---

## 🔧 Local Testing Before Deployment

### 1. Test Production Build Locally
```bash
cd frontend
npm run build
npm run preview
```
Visit `http://localhost:4173` and test:
- ✓ Page refresh on all routes (/, /categories, /about, /contact, /bookmarks)
- ✓ "Get Started Free" button navigation
- ✓ Category path buttons click
- ✓ All navigation links work

### 2. Verify API Calls
Check browser console to ensure API calls go to your backend URL (not localhost)

### 3. Test Back-End Connection
Before deploying frontend, ensure backend is running and accessible:
```bash
curl https://your-backend-url.com/api/test
```

---

## 🐛 Troubleshooting

### Still Getting 404 on Page Refresh?
- [ ] Check `vercel.json` has rewrite rules
- [ ] Verify project root is set to `frontend` directory
- [ ] Clear browser cache (Ctrl+Shift+Del)

### API Calls Failing?
- [ ] Verify `VITE_API_URL` in environment variables
- [ ] Check backend CORS configuration
- [ ] Ensure backend is running and accessible
- [ ] Backend must have started (check deployment logs)

### "Network Error" or Cannot Connect to Backend?
- [ ] Verify backend URL in `.env.production`
- [ ] Ensure backend has proper CORS headers
- [ ] Check if backend is actually deployed and running

---

## ✅ Files Modified

1. **frontend/src/pages/Home.jsx**
   - Changed: `<a href="/register">` → `<Link to="/register">`
   - Added import for `Link` from react-router-dom

2. **frontend/.env.local** (Created)
   - Local dev API configuration

3. **frontend/.env.production** (Updated)
   - Production backend URL

4. **frontend/vercel.json** (Updated)
   - Added build command, output directory
   - Added proper rewrites for SPA routing
   - Added cache headers

5. **frontend/.env.example** (Created)
   - Template for environment setup

---

## 🚀 What's Next?

After deployment:
1. Test all routes on production
2. Verify like/bookmark functionality persists
3. Check contact form submissions
4. Monitor error logs in Vercel/Netlify dashboard

---

## 📞 Support

If you still see 404 errors after deployment:
1. Check deployment logs on Vercel/Netlify
2. Verify backend is running and accessible
3. Check network tab in browser DevTools
4. Ensure `.env.production` is correctly set
