#!/usr/bin/env python3
import os
import glob

# build blog database
exec(compile(open("blog.py", "r").read(), "blog.py", "exec"))

# build actual site (comment out below line for node v16)
os.environ["NODE_OPTIONS"] = "--openssl-legacy-provider"
os.system("npm run build")

# run purgecss
os.chdir("dist")
contentList = " ".join(\
  glob.glob("*.html") + \
  glob.glob("*/*.html") + \
  glob.glob("*.*.js") + \
  glob.glob("templates/__react_static_root__/src/*/*.*.js"))
cssFile = " ".join(glob.glob("styles.*.css"))
os.system("purgecss --safelist \"pre\" --content " + contentList + " --css " + cssFile + " --output " + cssFile)
