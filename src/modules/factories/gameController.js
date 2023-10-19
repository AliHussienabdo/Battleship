import { Player} from './player.js';
import { Ai } from './AiPlayer.js';

// we need a game controller

class GameController{
    constructor(name){
        this.player = new Player(name);
        this.ai = new Ai();
    }
    addPlayerShips(cord){
        return this.player.addShip(cord);
    }
    placeShipsRandomaly(){
        this.player.placeShipsRandomaly();
    }
    playRound(cord){
        let randomMove = this.ai.move();
        return {
            isPlayerHit: this.dropToken(this.ai, cord),
            isAiHit: this.dropToken(this.player, randomMove),
            aiMove: randomMove
        };
    }
    dropToken(player, cord){
        return player.hit(cord);
    }
    isGameOver(){
        return this.player.hasLost() || this.ai.hasLost();
    }

    getWinner(){
        if(this.isGameOver()){
            if(this.ai.hasLost()){ 
                return 'player';
            }
            else return 'ai';
        }
        return false;
    }
    gameInfo(){
        if(this.player.hasLost());
    }
    getPlayerGameBoard(){
        return this.player.getGameBoard();
    }
    getAiGameBoard(){
        return this.ai.getGameBoard();
    }

    getActivePlayer(){
        return activePlayer;
    }
    
    switchActivePlayer(){
        this.activePlayer = this.activePlayer == this.players[0] ? this.players[1] : this.players[0];
    }
}


export {GameController};
