describe('diceRoll Request', function() {
    
    it ('request has array of dice', function() {
        var diceRollRequest = new DiceRoleRequest();
        expect(diceRollRequest.dice.length).to.equal(0);
    });

    it ('request gives total', function() {
        var diceRoleRequest = new DiceRoleRequest();
        var runningTotal = 0;
        for (var index = 0; index < 50; index++)
        {
            var newDice = addDice(diceRoleRequest);
            runningTotal+= newDice;
            expect(diceRoleRequest.total).to.equal(runningTotal);
        }
    });
    
    function addDice(diceRollRequest, faceUp) {
        var die = new Die();
        diceRollRequest.dice.push(die);
        return die.value;
    }
});