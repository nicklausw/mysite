#!/usr/bin/env python3
import os
os.system("./blog.py")
os.environ["NODE_OPTIONS"] = "--openssl-legacy-provider"
os.system("npm start")