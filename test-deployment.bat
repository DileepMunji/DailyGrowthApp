@echo off
REM DailyGrowth Quick Testing Script for Windows
REM Run this before deploying to verify everything works

echo.
echo ^===================================================================
echo.  DailyGrowth Deployment Checks
echo.===================================================================
echo.

REM Test 1: Check Node.js
echo [1/5] Checking Node.js...
node --version >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [OK] Node.js installed: 
    node --version
) else (
    echo [ERROR] Node.js not found
    exit /b 1
)
echo.

REM Test 2: Check package.json files
echo [2/5] Checking project structure...
if exist "frontend\package.json" (
    if exist "backend\package.json" (
        echo [OK] Both frontend and backend package.json found
    ) else (
        echo [ERROR] backend\package.json not found
        exit /b 1
    )
) else (
    echo [ERROR] frontend\package.json not found
    exit /b 1
)
echo.

REM Test 3: Check environment files
echo [3/5] Checking environment configuration...
if exist "frontend\.env.local" (
    if exist "frontend\.env.production" (
        echo [OK] Environment files configured
        echo     - .env.local (development)
        echo     - .env.production (production)
    ) else (
        echo [ERROR] frontend\.env.production not found
        exit /b 1
    )
) else (
    echo [ERROR] frontend\.env.local not found
    exit /b 1
)
echo.

REM Test 4: Check vercel.json
echo [4/5] Checking Vercel configuration...
if exist "frontend\vercel.json" (
    echo [OK] vercel.json found
    findstr /M "rewrites" "frontend\vercel.json" >nul 2>&1
    if %ERRORLEVEL% EQU 0 (
        echo [OK] Rewrites configured for SPA routing
    ) else (
        echo [WARNING] Rewrites not found in vercel.json
    )
) else (
    echo [ERROR] vercel.json not found
    exit /b 1
)
echo.

REM Test 5: Build test
echo [5/5] Testing frontend build...
echo (This may take a minute...)
cd frontend
call npm run build >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [OK] Frontend builds successfully
    if exist "dist" (
        echo [OK] Distribution folder created
    )
) else (
    echo [ERROR] Frontend build failed
    echo Run 'npm install' first, then try again
    cd ..
    exit /b 1
)
cd ..
echo.

echo.
echo ===================================================================
echo.  SUCCESS! All checks passed. Ready for deployment!
echo.===================================================================
echo.

echo Next steps:
echo 1. Update VITE_API_URL in frontend\.env.production
echo 2. Deploy frontend to Vercel/Netlify
echo 3. Deploy backend to production (Render, Railway, etc.)
echo 4. Test all routes in production
echo.

echo To test locally:
echo   cd frontend ^&^& npm run dev
echo   (in another terminal) cd backend ^&^& npm run dev
echo.

pause
