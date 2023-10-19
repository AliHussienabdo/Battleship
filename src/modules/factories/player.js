import {GameBoard} from './gameBoard.js'
class Player{
    constructor(name){
        this.name = name;
        this.shipsNum = 5;
        this.shipsDirHoriz = true;
        this.gameBoard = new GameBoard();
    }

    addShip(cord){
        if(this.shipsNum == 0) return false;
        if(this.gameBoard.addShip(this.shipsNum, cord, this.shipsDirHoriz)){
            this.shipsNum--;
            return true;
        }
        return false;
    }

    getName(){
        return this.name;
    }

    rotateShip(){
        return this.shipsDirHoriz = !this.shipsDirHoriz;
    }

    hit(cord){
        return this.gameBoard.receiveAttack(cord);
    }

    hasLost(){
        return this.gameBoard.isAllShipsSunk();
    }

    allShipsReady(){
        return this.shipsNum == 0;
    }

    isConqured(cord){
        return this.gameBoard.isOccupiedCell(cord);
    }

    getGameBoard(){
        return this.gameBoard.getBoard();
    }

    placeShipsRandomaly(){
        while(!this.allShipsReady()) {
            this.addShip([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]); 
            if(Math.random() < 0.5){ // change the direction randomly
                this.rotateShip();
            }
        }
    }
}
export { Player };