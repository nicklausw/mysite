#!/usr/bin/env python3
import os

# build blog database
exec(compile(open("blog.py", "r").read(), "blog.py", "exec"))

# build actual site (comment out below line for node v16)
os.environ["NODE_OPTIONS"] = "--openssl-legacy-provider"
os.system("npm start")