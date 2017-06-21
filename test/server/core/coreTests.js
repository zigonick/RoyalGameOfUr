describe('core', function() {
    describe('getRandomNumber', function() {
        afterEach(function() {
            Math.random.restore();
        });

        it ('Given min of 0 returns 0', function() {
            sinon.stub(Math, 'random').returns(0);
            var actual = getRandomNumber(0, 100);
            expect(actual).to.equal(0);
        });

        it ('Given max of 100 returns 100', function() {
            sinon.stub(Math, 'random').returns(1);
            var actual = getRandomNumber(0, 100);
            expect(actual).to.equal(100);
        });
        
        it ('Given min of 5 returns 5', function() {
            sinon.stub(Math, 'random').returns(0);
            var actual = getRandomNumber(5, 100);
            expect(actual).to.equal(5);
        }); 
    });
});