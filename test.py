#!/usr/bin/env python3
import os
os.system("python3 blog.py")
os.environ["NODE_OPTIONS"] = "--openssl-legacy-provider"
os.system("npm start")