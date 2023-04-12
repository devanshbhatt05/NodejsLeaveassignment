
const path = require('path');

// base line
console.log(__filename);

// file name
console.log(path.basename(__filename));


// bdirectory name
console.log(path.basename(__dirname));

// file extension
console.log(path.extname(__filename));


// create path object
console.log(path.parse(__filename));


// concatenate
console.log(path.join(__dirname, 'test', 'hello.html'));