# DailyGrowth - Simple Daily Blog App

A simple daily-use blog platform that delivers healthy habits, education, and job blogs in an interactive story-style format to help users improve 1% every day.

## 📁 Project Structure

```
DailyGrowthApp/
├── backend/
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API endpoints
│   ├── middleware/       # Authentication middleware
│   ├── server.js         # Express server
│   ├── package.json
│   └── .env.example
│
└── frontend/
    ├── src/
    │   ├── components/   # React components
    │   ├── pages/        # Page components
    │   ├── services/     # API services
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── vite.config.js
    ├── tailwind.config.js
    └── package.json
```

## 🚀 Getting Started

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

4. Make sure MongoDB is running locally (or update the MONGODB_URI in .env)

5. Start the server:
   ```bash
   npm run dev
   ```

   Server will run on `http://localhost:5001`

### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   Frontend will run on `http://localhost:3000`

## ✅ FEATURE 1: SETUP - COMPLETED

### Backend ✅
- Express server configured
- MongoDB connection setup
- Models: User, Blog, Contact
- Routes: Auth, Blogs, Contact
- JWT middleware for authentication
- Proper error handling

### Frontend ✅
- React + Vite setup
- Tailwind CSS configured
- Responsive Navbar with mobile hamburger menu
- Responsive Footer with links
- React Router setup with all page routes
- API service with axios interceptors
- Responsive design ready for all features

### Components Created
- `Navbar.jsx` - Responsive navigation with auth links
- `Footer.jsx` - Responsive footer with quick links
- `services/api.js` - Centralized API calls

---

## ✅ FEATURE 3: BLOG LISTING & STORY VIEWER - COMPLETED

### Backend ✅
- GET /api/blogs - Returns all blogs with pagination ready
- GET /api/blogs/:id - Returns single blog with all slides
- Sample blogs seeded with 8 slides each

### Frontend ✅
- Home page (`/`) with hero section and featured blogs grid
- BlogCard component with:
  - Responsive image
  - Category badge with emoji
  - Title, description, author info
  - Slide count display
  - Hover effects
- StoryViewer component (`/story/:id`) with:
  - Full-screen immersive experience
  - Instagram-style slide navigation
  - Left side click = previous slide
  - Right side click = next slide
  - Progress bar at top
  - Slide counter
  - Auto-play slides (5 second interval)
  - Pause/play button
  - Mobile-optimized controls
  - "Story Complete" message on last slide
  
### Pages & Components Created
- `pages/Home.jsx` - Home page with blog grid
- `components/BlogCard.jsx` - Individual blog card display
- `components/StoryViewer.jsx` - Full-screen story viewer

## 🧪 Testing FEATURE 3

### Step 1: Seed Sample Blogs (if not already done)
```bash
cd backend
npm run seed
```

This creates 3 sample blogs with 8 slides each:
- "7 Healthy Eating Habits" (Healthy category)
- "The Power of Reading" (Education category)
- "5 Skills Every Developer Should Master" (Jobs category)

### Step 2: Frontend Testing

**Test 1: Home Page Loading**
1. Open `http://localhost:3000`
2. Verify hero section displays correctly
3. Verify blog cards load and display images
4. Verify category badges show correctly

**Test 2: Responsive Grid Layout**

*Desktop (1440px):*
- Should show 3 blog cards per row
- Cards equal height and width
- Proper spacing between cards

*Tablet (768px):*
- Should show 2 blog cards per row
- Cards maintain aspect ratio

*Mobile (375px):*
- Should show 1 blog card per row
- Cards are full width with padding
- No horizontal scrolling

**Test 3: BlogCard Interaction**
1. Hover over a blog card on desktop
   - Image should scale up slightly
   - Box shadow should increase
   - Text color should change
2. Click "Read Story" button
   - Should navigate to StoryViewer

**Test 4: StoryViewer Navigation**

*Slide Navigation:*
1. Open a blog story
2. Click on right side of screen → Next slide
3. Click on left side of screen → Previous slide
4. Verify slide counter updates
5. Verify progress bar fills

*Progress Bar:*
- Progress bar should fill smoothly
- Should show 1/8, 2/8, etc.

*Auto-play:*
- Slides should auto-advance every 5 seconds
- Hovering should stop auto-play
- Click pause button to manually toggle

*Last Slide:*
- Should show "Story Complete!" message
- Left click should be disabled
- "Back to Home" button should work

**Test 5: Mobile Story Viewer**
1. Resize browser to mobile (375px)
2. Open a story
3. Verify layout is mobile-optimized
4. Test "Previous" and "Next" buttons
5. Test on landscape mode

### Step 3: API Testing with Postman

**Test 1: Get All Blogs**
```
GET http://localhost:5001/api/blogs
```

Expected Response:
```json
[
  {
    "_id": "...",
    "title": "7 Healthy Eating Habits...",
    "category": "Healthy",
    "author": "Dr. Sarah Johnson",
    "blogSlides": [
      {
        "image": "https://...",
        "text": "..."
      },
      ...
    ]
  }
]
```

**Test 2: Get Single Blog**
```
GET http://localhost:5001/api/blogs/{blog_id}
```

Should return one blog with all details.

**Test 3: Category Filter (will be tested in Feature 7)**
```
GET http://localhost:5001/api/blogs?category=Healthy
```

Should return only healthy blogs.

## ✨ Key Features in Feature 3

| Feature | Status | Details |
|---------|--------|---------|
| Home Page | ✅ | Hero + blog grid |
| Responsive Grid | ✅ | 1/2/3 columns |
| Blog Cards | ✅ | Image, badge, hover effects |
| Story Viewer | ✅ | Full-screen slides |
| Tap Navigation | ✅ | Left/right click logic |
| Progress Bar | ✅ | Visual slide progress |
| Auto-play | ✅ | 5 second intervals |
| Mobile Controls | ✅ | Previous/Next buttons |
| Story Complete | ✅ | Last slide message |

---



## 🧪 Testing FEATURE 1

### Backend Testing

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

2. Test the API using Postman:
   - GET `http://localhost:5001/api/test` - should return `{ message: 'API is working!' }`
   - Check MongoDB connection logs

### Frontend Testing

1. Start the frontend (in a new terminal):
   ```bash
   cd frontend
   npm run dev
   ```

2. Open `http://localhost:3000` and verify:
   - ✅ Navbar displays correctly on desktop
   - ✅ Navbar hamburger menu works on mobile (resize browser)
   - ✅ All navbar links are navigate-able (show placeholder pages)
   - ✅ Footer appears at the bottom with all links
   - ✅ Responsive layout works on mobile, tablet, and desktop
   - ✅ No horizontal scrolling on any device

## 📝 Next Steps

After verifying FEATURE 3 works correctly:
1. Test blog listing on home page
2. Verify responsive grid layout (1/2/3 columns)
3. Click "Read Story" on any blog card
4. Test story viewer navigation (left/right click)
5. Test on mobile and desktop
6. Verify progress bar and slide counter work
7. Once confirmed working, reply with **"FEATURE 3 VERIFIED"** to proceed with Feature 4: Like & Bookmark buttons in story mode

## 🎨 Design System

- **Primary Color**: Indigo-600
- **Secondary Color**: Teal-400
- **Background**: Gray-50
- **Category Colors**:
  - Healthy → Green
  - Education → Blue
  - Jobs → Orange
