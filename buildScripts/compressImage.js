const tinify = require('tinify');
const path = require('path');
tinify.key = "9ItvyVCYORTZHJ-hRGYGeHhAO0hp3xfF";
import {sourceFolder, dest as destFolder} from './compress';

  export function compressImage(file, sourceFolder, destFolder){
    let name = file.replace(/\.[^/.]+$/, "")
    let source = tinify.fromFile(path.join(sourceFolder, file));
    source.toFile(path.join(destFolder, `${name}_OPT.jpg`));
  }

  export function scaleImage(file, sourceFolder, destFolder, width){
    let name = file.replace(/\.[^/.]+$/, "")
    let source = tinify.fromFile(path.join(sourceFolder, file));
    let resized = source.resize({
      method: "scale",
      width:width
    });
    resized.toFile(path.join(destFolder, `${name}_OPT.jpg`));
  }