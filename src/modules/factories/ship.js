class Ship{
    constructor(length){
        this.length = length;
        this.NumHits = 0;
    }
    hit(){
        this.NumHits++;
    }
    isSunk(){
        return this.NumHits === this.length;
    }
}

export {Ship};