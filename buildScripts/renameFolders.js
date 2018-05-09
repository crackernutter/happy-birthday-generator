import fs from 'fs';
import chalk from 'chalk';
import { sourceFolder, dest } from './compress';


fs.rename(sourceFolder, './src/images_old/', () => {
    fs.rename(dest, sourceFolder, () => {
        fs.rmdir('./src/images_old/', () => { console.log(chalk.green("Renamed Folders")) });
    });
});