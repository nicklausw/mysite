#!/usr/bin/env python3
import os
exec(compile(open("blog.py", "r").read(), "blog.py", "exec"))
os.environ["NODE_OPTIONS"] = "--openssl-legacy-provider"
os.system("npm run build")
os.chdir(os.path.join(os.getcwd(), "dist"))
os.system("purgecss --safelist \"pre\" --content *.html */*.html *.*.js templates/__react_static_root__/src/*/*.*.js --css styles.*.css --output styles.*.css")
