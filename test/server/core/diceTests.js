describe('Die', function () {
    var die;
    
    beforeEach(function() {
        die = new Die();
    });
    
    describe('Die Attributes', function() { 
    
        it ('faceUp is not null', function() {
            expect(die.faceUp).not.to.equal(undefined);
        });

        it('rotation is not null', function() {
            expect(die.rotation).not.to.equal(undefined);
        });
    });

    describe('value', function() {

        it('given faceup of 1 returns 0', function() {
            die.faceUp = 1;
            expect(die.value).to.equal(0);
        });

        it('given faceup of 2 returns 0', function() {
            die.faceUp = 2;
            expect(die.value).to.equal(0);
        });
        
        it('given faceup of 3 returns 1', function() {
            die.faceUp = 3;
            expect(die.value).to.equal(1);
        });
        
        it('given faceup of 4 returns 1', function() {
            die.faceUp = 4;
            expect(die.value).to.equal(1);
        }); 
    });
});