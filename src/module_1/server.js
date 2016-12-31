var http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!\n');
}).listen(process.env.PORT, process.env.IP);

console.log('Server is listening on PORT:', process.env.PORT);