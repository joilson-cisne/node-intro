var mathFun = require('math-fun');

mathFun.evenDoubler(2, (err, result, ellapsedTime) =>{
    if (err) {
        console.log(`ERROR: ${err.message}`);
    } else {
        console.log(`The results are: ${result} (${ellapsedTime} ms)`);
    }
});