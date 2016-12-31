var Resource = require('./resource');

var resource = new Resource(7);

resource.on('start', () => {
    console.log(`I've started!`);
});

resource.on('data', (data) => {
    console.log(`   I received data -> ${data}`);
});

resource.on('end', (total) => {
    console.log(`I'm done, with ${total} data events.`);
});