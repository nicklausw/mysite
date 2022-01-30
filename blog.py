#!/usr/bin/env python3
import os
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
  title = listdir[i].split('"')[1::2]
  thisText = thisText.replace("\n", "\\n").replace("\"", "\\\"")
  outFile.write("{\"id\": " + str(counter) + ", \"title\": \"" + title[0] + "\", \"body\": \"" + thisText + "\"}")
  counter = counter + 1
outFile.write("]")
outFile.close()
