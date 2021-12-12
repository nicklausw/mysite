@echo off
set mypath=%~dp0
if not exist %mypath%\css\NUL start "Bulma CSS First-time Builder" ""C:\Windows\System32\cmd.exe"" /k ""C:\Program Files\nodejs\nodevars.bat" && cd %mypath% && npm run css-build && exit"
start "Bulma CSS Updater" ""C:\Windows\System32\cmd.exe"" /k ""C:\Program Files\nodejs\nodevars.bat" && cd %mypath% && npm run css-watch"
start "Main Program Updater" ""C:\Windows\System32\cmd.exe"" /k ""C:\Program Files\nodejs\nodevars.bat" && cd %mypath% && npm start"