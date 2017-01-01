var assert = require('assert');
var mathFun = require('./math-fun');

assert.equal(mathFun.evenDoublerSync(2), 4);
assert.throws(() => {
    mathFun.evenDoublerSync(3)
}, /Odd/); // RegEx

mathFun.evenDoubler(2, (err, result) => {
    assert.ifError(err);
    assert.equal(result, 4, 'evenDoubler failed on even number');
})

mathFun.evenDoubler(3, (err, result) => {
    assert.notEqual(err, null);
})