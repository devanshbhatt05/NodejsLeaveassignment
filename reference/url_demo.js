

const url = require('url');


const sampleURl = new URL('http://personalwebsite.com:9000/home.html?name=nkdebug&age=30');


console.log(sampleURl.href);


console.log(sampleURl.host);


console.log(sampleURl.port);

console.log(sampleURl.searchParams);