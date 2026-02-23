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

## ✅ FEATURE 2: REGISTRATION & LOGIN - COMPLETED

### Backend ✅
- User model with password hashing (bcrypt)
- POST /api/auth/register - Create new user
- POST /api/auth/login - Authenticate user
- JWT token generation on success

### Frontend ✅
- Register page with form validation
- Login page with form validation
- Error handling and success messages
- Responsive design (mobile, tablet, desktop)
- Token storage in localStorage
- Auto-redirect on successful auth

### Pages Created
- `pages/Register.jsx` - Responsive registration form
- `pages/Login.jsx` - Responsive login form

## 🧪 Testing FEATURE 2

### Backend API Testing (Using Postman or curl)

**1. Test Register Endpoint:**
```bash
POST http://localhost:5001/api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

Expected Response:
```json
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**2. Test Login Endpoint:**
```bash
POST http://localhost:5001/api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

Expected Response:
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Frontend Testing

1. **Desktop View:**
   - Open `http://localhost:3000/register`
   - Fill in the form with valid data
   - Click "Create Account"
   - Verify success message appears
   - Should redirect to home page
   - Verify token is stored in localStorage

2. **Mobile View:**
   - Resize browser to mobile width (375px)
   - Verify form is fully responsive
   - All inputs are readable
   - Buttons are full width
   - No horizontal scrolling

3. **Login Testing:**
   - Open `http://localhost:3000/login`
   - Try with invalid credentials (should show error)
   - Try with valid credentials (should login)
   - Check that navbar shows "Logout" after login

4. **Error Handling:**
   - Try registering with existing email
   - Try logging in with wrong password
   - Test empty fields validation
   - Test password mismatch validation

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

After verifying FEATURE 2 works correctly:
1. Test backend API thoroughly with Postman (register & login)
2. Test frontend registration form on mobile and desktop
3. Test login functionality
4. Verify token is stored and logout works
5. Once confirmed working, reply with **"FEATURE 2 VERIFIED"** to proceed with FEATURE 3: Blog Listing & Blog Viewing with Story Mode

## 🎨 Design System

- **Primary Color**: Indigo-600
- **Secondary Color**: Teal-400
- **Background**: Gray-50
- **Category Colors**:
  - Healthy → Green
  - Education → Blue
  - Jobs → Orange
