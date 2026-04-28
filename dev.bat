@echo off
cd /d "c:\Users\tempo\Desktop\Diguz (personal website)"
echo Killing any process on port 3000...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":3000" ^| findstr "LISTENING"') do (
    taskkill /PID %%a /F >nul 2>&1
)
echo Starting dev server from %CD%...
npm run dev
pause
