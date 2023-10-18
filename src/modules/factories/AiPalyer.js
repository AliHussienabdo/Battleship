import { Player } from './player';


class Ai{
    constructor(){
        this.player = new Player('Ai');
        this.moves = [];
        this.placeShips();
    }

    move () {
        let cord = getRandomCoord();
        while(this.moves.includes(cord)){
            cord = getRandomCoord();
        }
        this.moves.push(cord);
        return cord;
    }

    hit(cord){
        return this.player.hit(cord);
    }

    placeShips() {
        while(!this.player.allShipsReady()) {
            this.player.addShip(getRandomCoord());
        }
    }

    hasLost(){
        return this.player.hasLost();
    }

    getRandomCoord (){
        return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    }
    
}

export {Ai};

