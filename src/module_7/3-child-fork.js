var fork = require('child_process').fork;

var child = fork(`${__dirname}/honor-student.js`);

child.on('message', (message) => {
    console.log(`The answer is: ${message.answer}`);
    child.send({cmd: 'done'});
});

child.send({cmd: 'double', number: 20});