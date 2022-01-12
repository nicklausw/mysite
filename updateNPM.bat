@echo off
set mypath=%~dp0
"C:\Program Files\nodejs\nodevars.bat" && cd %mypath% && npm update && npm install && pause