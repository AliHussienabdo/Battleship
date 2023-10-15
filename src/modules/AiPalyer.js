import { Player } from './player';


class Ai{
    constructor(){
        this.ai = new Player('Ai');
    }

    move (SecPlayer) {
        let cord = getRandomCoord();
        while(SecPlayer.isConquered(cord)){
            cord = getRandomCoord();
        }
        return cord;
    }

    hit(cord){
        return this.ai.hit(cord);
    }

    placeShips() {
        while(!this.ai.AllShipsReady()) {
            this.ai.addShip(getRandomCoord());
        }
    }

    isLost(){
        return this.ai.isLost();
    }

    getRandomCoord (){
        return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    }
    
}

export {Ai};

