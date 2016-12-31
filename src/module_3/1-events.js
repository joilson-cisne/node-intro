var EventEmitter = require('events').EventEmitter;

var getResource = (maxCount) => {
    var e = new EventEmitter();
    
    process.nextTick(() => {
        var count = 0;
        e.emit('start');
        var t = setInterval(() => {
            e.emit('data', ++count);
            
            if (count === maxCount) {
                e.emit('end', count);
                clearInterval(t);
            }
        }, 10);
    });
    
    return (e);
};

var resource = getResource(5);

resource.on('start', () => {
    console.log(`I've started!`);
});

resource.on('data', (data) => {
    console.log(`   I received data -> ${data}`);
});

resource.on('end', (total) => {
    console.log(`I'm done, with ${total} data events.`);
});

