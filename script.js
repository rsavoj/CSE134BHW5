

import { createReadStream } from 'fs';
var fs = require('fs');

var readStream = createReadStream('./demofile.txt');

/*Write to the console when the file is opened:*/
readStream.on('open', () => {
        console.log('The file is open');
    });

              

