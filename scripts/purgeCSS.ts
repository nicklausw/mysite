// run purgeCSS at build
import * as fs from "fs"
import { PurgeCSS } from "purgecss"

const filePaths = ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"];
const cssPaths = ["./out/_next/static/css/*.css"];

new PurgeCSS().purge({
  content: filePaths,
  css: cssPaths
}).then(purge => {
  purge.forEach(element => {
    var fileName = element.file!.split("/").pop();
    var sizeOriginal = fs.statSync(element.file!).size / 1000;
    var sizeNew = element.css.length / 1000;
    var percentage = (sizeNew / sizeOriginal) * 100;
    console.log("Shrunk " + fileName + " to " +
      sizeNew.toFixed(2) + " / " +
      sizeOriginal.toFixed(2) + " KB (" +
      percentage.toFixed(2) + "%)");
    fs.writeFileSync(element.file!, element.css);
  })
});