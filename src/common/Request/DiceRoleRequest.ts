class DiceRoleRequest {
    public dice: Array<Die>;
    
    public constructor() {
        this.dice = new Array<Die>();
    }
    public get total(): number {
        var total = 0;
        this.dice.forEach(function(die){
            total += die.value;
        });
        return total;
    }
}