

import { readStream } from './readStream';

/* Write to the console when the file is opened: */
readStream.on('open', () => {
    console.log('The file is open');
});
              

