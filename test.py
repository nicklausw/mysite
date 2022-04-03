#!/usr/bin/env python3
import os

# build blog database
exec(compile(open("blog.py", "r").read(), "blog.py", "exec"))

# test site on localhost:3000
os.system("npm start")