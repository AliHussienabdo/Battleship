import {GameBoard} from './gameBoard.js'

class Player{
    constructor(name){
        this.name = name;
        this.shipMaxLength = 5;
        this.shipsDirHoriz = true;
        this.gameBoard = GameBoard();
    }

    addShip(cord){
        if(this.shipMaxLength == 0) return false;
        if(gameBoard.addShip(this.shipMaxLength, cord, this.shipsDirHoriz)){
            this.shipMaxLength--;
            return true;
        }
        return false;
    }

    updateDirection(){
        this.shipDirHoriz = this.shipDirHoriz? false : true;
    }

    hit(cord){
        return this.gameBoard.receiveAttack(cord);
    }

    hasLost(){
        return this.gameBoard.isAllShipsSunk();
    }

    allShipsReady(){
        return this.shipMaxLength > 0;
    }

    isConqured(cord){
        return this.gameBoard.isOccupiedCell(cord);
    }

    getGameBoard(){
        return this.gameBoard.getBoard();
    }

}

