import { Player} from '../modules/player.js';
import { Ai } from '../modules/ai.js';

// we need a game controller

class GameController{
    constructor(name){
        let players = [ new Player(name), new Ai() ];
        let activePlayer = players[0];
    }

    // func to detect if if any player Wins
    addPlayerShips(cord){
        return this.players[0].addShip(cord);
    }
    playRound(cord){
        if(typeof this.getActivePlayer() == this.players[1]){
            cord = this.getActivePlayer().move(this.players[0]);
        }
        this.switchActivePlayer();
        return this.activePlayer.hit(cord);
    }
    getActivePlayer(){
        return activePlayer;
    }
    switchActivePlayer(){
        this.activePlayer = this.activePlayer == this.players[0] ? this.players[1] : this.players[0];
    }
}
