class Die {
    
    public faceUp: number;
    public rotation: number;
    
    public constructor() {
        this.faceUp = getRandomNumber(1, 4);
        this.rotation = getRandomNumber(0, 359);
    }

    public get value(): number {
        return (this.faceUp > 2) ? 1 : 0;
    }
}

