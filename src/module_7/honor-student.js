var mathFun = require('./math-fun');

process.on('message', (message) => {
    if (message.cmd === 'double') {
        var number = message.number;
        console.log(`hs: I was asked to double ${number}`); // hs stands for Honor Student
        mathFun.evenDoubler(number, (err, result) => {
            process.send({answer: result});
        });
    } else if (message.cmd === 'done') {
        process.exit();
    }
});