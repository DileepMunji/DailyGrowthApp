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

## ✨ Key Features Completed in Feature 3

| Feature | Status | Details |
|---------|--------|---------|
| 18 Sample Blogs | ✅ | 6 Healthy, 6 Education, 6 Jobs |
| Responsive Grid | ✅ | 1 col (mobile), 2 cols (tablet), 3 cols (desktop) |
| Blog Cards | ✅ | Image, badge, hover effects, read more button |
| Story Viewer | ✅ | Full-screen slides |
| Tap Navigation | ✅ | Left click = prev, Right click = next |
| Progress Bar | ✅ | Visual slide progress with smooth animation |
| Auto-play | ✅ | 5 second intervals (pause on hover) |
| Mobile Controls | ✅ | Previous/Next buttons on mobile |
| Up Next Feature | ✅ | Shows next blog on last slide |
| Category Filter | ✅ | Filter by Healthy/Education/Jobs |
| Slide Counter | ✅ | Shows current / total slides |

---

## 🧪 COMPLETE E2E TESTING GUIDE FOR FEATURE 3

### STEP 1: Seed the Database with 18 Blogs

Open a terminal in the backend folder:
```bash
cd backend
npm run seed
```

**Expected Output:**
```
✅ Connected to MongoDB
🗑️ Cleared existing blogs
✅ Created 18 sample blogs

📚 Sample Blogs by Category:

HEALTHY (6 blogs):
  1. 7 Healthy Eating Habits for Better Health
  2. Fitness: Starting Your Exercise Journey
  3. Mental Health: 5 Ways to Reduce Stress
  4. Sleep Better: Natural Tips for Quality Rest
  5. Boost Your Immunity Naturally

EDUCATION (6 blogs):
  1. The Power of Reading: Transform Your Mind
  2. Mastering Time Management
  3. Learning Styles: Find Your Best Way to Learn
  4. Building Critical Thinking Skills
  5. The Art of Effective Communication

JOBS (6 blogs):
  1. 5 Skills Every Developer Should Master
  2. How to Land Your First Developer Job
  3. Remote Work: Pros and Cons
  4. Career Growth: Planning Your Path
  5. Negotiating Your Salary

✅ Database seeded successfully!
```

---

### STEP 2: Test Responsive Blog Grid (HOME PAGE)

**Desktop Testing (1440px width):**
1. Open `http://localhost:3000`
2. Verify hero section displays beautifully
3. Verify **3 blog cards per row**
4. Cards should have equal height

**Tablet Testing (768px width):**
1. Resize browser to tablet (768px)
2. Verify **2 blog cards per row**
3. Cards should be properly spaced

**Mobile Testing (375px width):**
1. Resize browser to mobile (375px)
2. Verify **1 blog card per row** (full width)
3. Cards should have padding
4. **No horizontal scrolling**
5. Image, title, description all readable

---

### STEP 3: Test Category Filtering

1. On home page, verify 4 filter buttons appear:
   - 📚 All
   - 🌱 Healthy
   - 📖 Education
   - 💼 Jobs

**Test All Categories:**
- Click "All" → Shows all 18 blogs
- Click "Healthy" → Shows only 6 healthy blogs
- Click "Education" → Shows only 6 education blogs
- Click "Jobs" → Shows only 6 jobs blogs
- Click another category → Grid updates instantly

**URL Updates:**
- When you click a category, URL should change to `?category=Healthy`
- Refreshing page should keep the filter active

---

### STEP 4: Test Blog Cards (Individual Cards)

**On Each Blog Card:**
1. Verify category badge shows:
   - 🌱 Green badge for Healthy
   - 📖 Blue badge for Education
   - 💼 Orange badge for Jobs

2. Verify card shows:
   - Image from first slide
   - Blog title (2 line max, truncated with ellipsis)
   - Description (2 lines max, truncated with ellipsis)
   - Author name
   - Number of slides (e.g., "📖 8 slides")
   - "Read Story →" button

3. Hover effects on desktop:
   - Image should scale up slightly
   - Card shadow should increase
   - Button text color might change
   - Title should change color to indigo

4. Click "Read Story" button → Should navigate to story viewer

---

### STEP 5: Test Instagram-Style Story Viewer

**Opening a Story:**
1. Click "Read Story" on any blog card
2. Should navigate to full-screen story viewer
3. URL should be `/story/{blogId}`

**Full-Screen Story Experience:**

**Header Bar (Top):**
- Close button (✕)
- Blog title and author
- Slide counter (e.g., "1 / 8")

**Progress Bar:**
- Should be at top below header
- Should fill from left to right
- Should show smooth animation as slides progress

**Main Story Area:**
- Full-screen background image
- Dark overlay on top
- Centered white text
- Text should be readable

**Desktop Navigation (50% screen width zones):**

1. **Hover on LEFT side:**
   - Should show subtle "← Prev" indicator
   - Clicking should go to previous slide
   - If on slide 1, clicking left should do nothing

2. **Hover on RIGHT side:**
   - Should show subtle "Next →" indicator
   - Clicking should go to next slide
   - If on last slide, clicking right should do nothing

**Mobile Controls (Bottom Bar):**
- Should only appear on mobile (< 768px)
- Shows "← Previous", slide counter, "Next →" buttons
- Previous button disabled on slide 1
- Next button disabled on last slide

**Auto-Play Feature:**
- Slides should auto-advance every 5 seconds
- Hovering on desktop should pause auto-play
- Pause/Play button on bottom-right to manually toggle (desktop only)

---

### STEP 6: Test Progress Tracking

**Slide Counter:**
- Should show current slide number
- Should show total slides
- Should update as you navigate

**Progress Bar:**
- Slide 1/8 → 12.5% filled
- Slide 4/8 → 50% filled
- Slide 8/8 → 100% filled

---

### STEP 7: Test Last Slide & Up Next Feature

**On Last Slide:**
1. Continue navigating to the last slide (slide 8)
2. Should see "Story Complete!" overlay
3. Overlay should show:
   - ✨ Emoji
   - "Story Complete!" heading
   - Congratulations message
   - "Up Next →" button with next blog title
   - "Back to Home" button

**If There's a Next Blog:**
- Click "Up Next → [Blog Title]" 
- Should navigate to the next blog story
- Should start from slide 1 of new blog

**If It's the Last Blog:**
- Should only show "Back to Home" button
- No "Up Next" button

**Back to Home:**
- Should navigate to home page
- Should reset story viewer

---

### STEP 8: Test Mobile Story Flow

**Full Mobile Experience (375px):**
1. Open home page on mobile
2. Click a blog card to open story
3. Verify story viewer is full-screen
4. Bottom control bar with Previous/Next buttons
5. Tap right side → Next slide
6. Tap left side → Previous slide
7. Navigate through all slides
8. Last slide should show overlay with Up Next
9. Landscape mode should still work properly

---

### STEP 9: API Testing (Postman)

**Test 1: Get All Blogs**
```
GET http://localhost:5001/api/blogs
```

Should return array with 18 blogs.

**Test 2: Filter by Category**
```
GET http://localhost:5001/api/blogs?category=Healthy
```

Should return only 6 healthy blogs.

**Test 3: Get Single Blog**
```
GET http://localhost:5001/api/blogs/{blogId}
```

Should return single blog with 8 slides.

---

## 📋 TEST CHECKLIST

### Blog Grid - Mobile (375px)
- [ ] 1 column layout
- [ ] Full width cards with padding
- [ ] Cards are readable
- [ ] No horizontal scrolling
- [ ] Category filter works
- [ ] Blog cards display correctly

### Blog Grid - Tablet (768px)
- [ ] 2 column layout
- [ ] Proper spacing
- [ ] Cards look good
- [ ] Filter works
- [ ] Responsive

### Blog Grid - Desktop (1440px+)
- [ ] 3 column layout
- [ ] Cards have equal height
- [ ] Hover effects work
- [ ] All features visible
- [ ] Professional appearance

### Story Viewer - Desktop
- [ ] Full-screen layout
- [ ] Left click → previous slide
- [ ] Right click → next slide
- [ ] Progress bar animates
- [ ] Slide counter updates
- [ ] Auto-play works
- [ ] Hover zones visible
- [ ] Pause/Play toggle works
- [ ] "Up Next" works on last slide

### Story Viewer - Mobile
- [ ] Full-screen on mobile
- [ ] Previous button works
- [ ] Next button works
- [ ] Buttons properly positioned
- [ ] Buttons properly sized
- [ ] Story text readable
- [ ] Up Next feature works

### Category Filtering
- [ ] All button shows 18 blogs
- [ ] Healthy shows 6 blogs
- [ ] Education shows 6 blogs
- [ ] Jobs shows 6 blogs
- [ ] URL updates correctly
- [ ] Page refresh keeps filter

### Up Next Feature
- [ ] Shows on last slide
- [ ] Shows next blog info
- [ ] Click Up Next → navigates
- [ ] Works for all blogs except last
- [ ] Last blog shows "Back to Home"

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
