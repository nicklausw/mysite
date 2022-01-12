@echo off
set mypath=%~dp0
start "Bulma CSS First-time Builder" ""C:\Windows\System32\cmd.exe"" /k ""C:\Program Files\nodejs\nodevars.bat" && cd %mypath% && npm run css-build && exit"
start "Bulma CSS Updater" ""C:\Windows\System32\cmd.exe"" /k ""C:\Program Files\nodejs\nodevars.bat" && cd %mypath% && npm run css-watch"
start "Main Program Updater" ""C:\Windows\System32\cmd.exe"" /k ""C:\Program Files\nodejs\nodevars.bat" && cd %mypath% && set NODE_OPTIONS=--openssl-legacy-provider && npm start"