#!/usr/bin/env python3
import os
exec(compile(open("blog.py", "r").read(), "blog.py", "exec"))
os.environ["NODE_OPTIONS"] = "--openssl-legacy-provider"
os.system("npm start")