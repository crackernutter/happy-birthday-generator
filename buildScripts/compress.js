import {scaleImage} from './compressImage';
import fs from 'fs';
import chalk from 'chalk';
import path from 'path';

export const sourceFolder = './src/images/';
export const dest = './src/images_opt/';

function compress(){
if (!fs.existsSync(dest)){
    fs.mkdirSync(dest);
}

fs.readdirSync(sourceFolder).forEach(file => {
  if (file.includes('_OPT')){
    console.log(chalk.green('Moving Image'));
    fs.rename(path.join(sourceFolder, file), path.join(dest, file), () => {});
  }
  else{
    console.log(chalk.green('Compressing Image'));
    scaleImage(file, sourceFolder, dest, 500);
  }
  });
}

if (require.main === module){
    console.log(chalk.green('Running Compress Function'));
    compress();
}

  

