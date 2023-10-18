import { Player} from './player.js';
import { Ai } from './AiPlayer.js';

// we need a game controller

class GameController{
    constructor(name){
        // let players = [ new Player(name), new Ai() ];
        // let activePlayer = players[0];
        this.player = new Player(name);
        this.ai = new Ai();

    }

    addPlayerShips(cord){
        return this.players[0].addShip(cord);
    }
    playRound(cord){
        // if(typeof this.getActivePlayer() == this.players[1]){
        //     cord = this.getActivePlayer().move();
        // }
        let aiHit = this.ai.hit(cord);

        let randomMove = this.ai.move();
        let plHit = this.player.hit(randomMove);

        return {
            isPlayerHit: plHit,
            isAiHit:aiHit,
            aiMove: randomMove
        };
    }
    isGameOver(){
        return this.players[0].isLost() || this.players[1].isLost();
    }
    getActivePlayer(){
        return activePlayer;
    }
    getGameBoard(){
        return this.player.getGameBoard();
    }
    switchActivePlayer(){
        this.activePlayer = this.activePlayer == this.players[0] ? this.players[1] : this.players[0];
    }
}


export {GameController};
