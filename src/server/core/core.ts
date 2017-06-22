module Core {
    export function getRandomNumber(min, max) : number
    {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}