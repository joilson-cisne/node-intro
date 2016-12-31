var http = require('http');

var options = {
    host: 'www.pluralsight.com',
    port: 80,
    path: '/',
    method: 'GET'
};

console.log('Going to make a request...');

// var req = http.request(options, (response) => {
//     console.log(response.statusCode);
//     response.pipe(process.stdout);
// });

// req.end();

// ===================================================
// get does not follow redirects automatically
http.get(options, (response) => {
    console.log(response.statusCode);
    response.pipe(process.stdout);
});