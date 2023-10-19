import { Player } from './player.js';

class Ai{
    constructor(){
        this.player = new Player('Ai');
        this.moves = [];
        this.player.placeShipsRandomaly();
    }

    move () {
        let cord = this.getRandomCoord();
        // we bush the array as string because there is no comparison between two arrays in js
        while(this.moves.includes(cord.join(''))){
            cord = this.getRandomCoord(); 
        }
        this.moves.push(cord.join(''));
        return cord;
    }

    hit(cord){
        return this.player.hit(cord);
    }

    hasLost(){
        return this.player.hasLost();
    }

    getGameBoard(){
        return this.player.getGameBoard();
    }

    getRandomCoord (){
        return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    }
    
}

export {Ai};

