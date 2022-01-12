@echo off
set mypath=%~dp0
"C:\Program Files\nodejs\nodevars.bat" && cd %mypath% && set NODE_OPTIONS=--openssl-legacy-provider  && npm start && pause