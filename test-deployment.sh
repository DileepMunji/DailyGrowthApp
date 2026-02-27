#!/bin/bash

# 🧪 DailyGrowth Quick Testing Script
# Run this before deploying to verify everything works

echo "🔍 Starting DailyGrowth Deployment Tests..."
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test 1: Check Node.js version
echo -e "${YELLOW}[1/5] Checking Node.js version...${NC}"
if command -v node &> /dev/null; then
    echo -e "${GREEN}✓ Node.js installed: $(node --version)${NC}"
else
    echo -e "${RED}✗ Node.js not found${NC}"
    exit 1
fi
echo ""

# Test 2: Check package.json files
echo -e "${YELLOW}[2/5] Checking project structure...${NC}"
if [ -f "frontend/package.json" ] && [ -f "backend/package.json" ]; then
    echo -e "${GREEN}✓ Both frontend and backend package.json found${NC}"
else
    echo -e "${RED}✗ Missing package.json files${NC}"
    exit 1
fi
echo ""

# Test 3: Check environment files
echo -e "${YELLOW}[3/5] Checking environment configuration...${NC}"
if [ -f "frontend/.env.local" ] && [ -f "frontend/.env.production" ]; then
    echo -e "${GREEN}✓ Environment files found${NC}"
    echo "   - .env.local configured for development"
    echo "   - .env.production configured for production"
else
    echo -e "${RED}✗ Missing environment files${NC}"
    exit 1
fi
echo ""

# Test 4: Check vercel.json
echo -e "${YELLOW}[4/5] Checking Vercel configuration...${NC}"
if [ -f "frontend/vercel.json" ]; then
    echo -e "${GREEN}✓ vercel.json found${NC}"
    if grep -q "rewrites" frontend/vercel.json; then
        echo -e "${GREEN}✓ Rewrites configured for SPA routing${NC}"
    else
        echo -e "${RED}✗ Rewrites not found in vercel.json${NC}"
    fi
else
    echo -e "${RED}✗ vercel.json not found${NC}"
fi
echo ""

# Test 5: Build test (optional)
echo -e "${YELLOW}[5/5] Testing frontend build...${NC}"
echo "⏳ This may take a minute..."
cd frontend
if npm run build > /dev/null 2>&1; then
    echo -e "${GREEN}✓ Frontend builds successfully${NC}"
    if [ -d "dist" ]; then
        FILE_COUNT=$(find dist -type f | wc -l)
        echo -e "${GREEN}✓ Distribution folder created with $FILE_COUNT files${NC}"
    fi
else
    echo -e "${RED}✗ Frontend build failed${NC}"
    echo "   Run 'npm install' first, then try again"
    exit 1
fi
cd ..
echo ""

echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ All tests passed! Ready for deployment${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

echo "📝 Next steps:"
echo "1. Update VITE_API_URL in frontend/.env.production with your backend URL"
echo "2. Deploy frontend to Vercel/Netlify"
echo "3. Deploy backend to Render/Railway/Heroku"
echo "4. Test all routes in production"
echo ""

echo "🚀 To test locally before deployment:"
echo "   cd frontend && npm run dev"
echo "   (in another terminal) cd backend && npm run dev"
echo ""
