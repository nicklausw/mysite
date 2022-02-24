#!/usr/bin/env python3
import os

# write every markdown file in blog directory to json
listdir = sorted(os.listdir("./blog"))
outFile = open("blog.json", "w")
outFile.write("[")

counter = 1
for i in range(len(listdir)):
  if counter > 1:
    outFile.write(",")

  thisFile = open("blog/" + listdir[i], "r")
  thisText = thisFile.read()
  thisFile.close()

  title = ""
  subtitle = ""
  created = ""
  modified = ""

  header = thisText[thisText.find("{")+1:thisText.find("}")]
  splitHeader = header.split("\n")
  thisText = thisText.replace("{" + header + "}", "")
  for c in splitHeader:
    c = c.strip()
    if c.startswith("Title: "):
      title = c.lstrip("Title: ").strip("\"")
    elif c.startswith("Subtitle: "):
      subtitle = c.lstrip("Subtitle: ").strip("\"")
    elif c.startswith("Date created: "):
      created = c.lstrip("Date created: ").strip("\"")
    elif c.startswith("Date modified: "):
      modified = c.lstrip("Date modified: ").strip("\"")

  if title == "":
    print("WARNING: No title for " + listdir[i])
  if created == "":
    print("WARNING: No creation date for " + listdir[i])
      
  thisText = thisText.strip("\n").replace("\n", "\\n").replace("\"", "\\\"")

  outFile.write("{")
  outFile.write("\"id\": " + str(counter) + ", ")
  outFile.write("\"title\": \"" + title + "\", ")
  outFile.write("\"created\": \"" + created + "\", ")
  if modified != "":
    outFile.write("\"modified\": \"" + modified + "\", ")
  if subtitle != "":
    outFile.write("\"subtitle\": \"" + subtitle + "\", ")
  outFile.write("\"body\": \"" + thisText + "\"}")
  counter = counter + 1
outFile.write("]")
outFile.close()
