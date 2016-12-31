var request = require('request');

var stream = request('http://pluralsight.com');

stream.on('data', (chunk) => {
    console.log(`>>>Data>>> ${chunk}`);
});

stream.on('end', () => {
    console.log(`>>>Done!>>>`);
});