var should = require('should');
var mathFun = require('./math-fun');

describe('MathFun', () => {
    describe('when used synchronously', () => {
        it('should double even numbers correctly', () => {
            mathFun.evenDoublerSync(2).should.equal(4);
        });
        
        it('should throw on odd numbers', (done) => {
            (() => mathFun.evenDoublerSync(3)).should.throw(/Odd/);
            done();
        });
    });
    
    describe('when used asynchronously', () => {
        it('should double even numbers correctly', (done) => {
            mathFun.evenDoubler(2, (err, result) => {
                should.not.exist(err);
                result.should.equal(4);
                done();
            });
        });
        
        it('should return error on odd numbers', (done) => {
            mathFun.evenDoubler(3, (err, result) => {
                should.exist(err);
                should.not.exist(result);
                done();
            });
        });
    });
});