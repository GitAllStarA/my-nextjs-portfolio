import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size'; // Import the image-size library



export function ImageLoop() {
    //get path
    const publicDir = path.join(process.cwd(),'public');

    //read contents of the public directory
    const files = fs.readdirSync(publicDir);

    //filter for jpg, jpeg, png
    const filteredImages = files.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg','.jpeg','.png'].includes(ext);
    })
    .map( file => {
        const filePath = path.join(publicDir, file);
        const dimension = sizeOf(filePath);
        return {
            src: `/${file}`,
            width: dimension.width,
            height:dimension.height,
        };
    } )
    
    return filteredImages;
}

export default ImageLoop;