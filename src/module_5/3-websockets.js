var http = require('http');
var socketio = require('socket.io');
var fs = require('fs');

var handler = (req, res) => {
    fs.readFile(`${__dirname}/index.html`, (err, data) => {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
};

var app = http.createServer(handler);
var io = socketio.listen(app);

io.sockets.on('connection', (socket) => {
    setInterval(() => {
        var timestamp = Date.now();
        console.log(`Emitted: ${timestamp}`);
        socket.emit('timer', timestamp);
    }, 2000);
    
    socket.on('submit', (data) => {
        console.log(`Submitted: ${data}`);
    });
});

app.listen(process.env.PORT, process.env.IP);

console.log(`Server listening on port ${process.env.PORT}`);

// io.sockets.on('connection', (socket) => {
//     socket.emit('news', {hello; 'world'});
    
//     socket.
// })