import { Ship } from "./ship.js";
import { cell } from "./cell.js";

class GameBoard {
    constructor(){
        this.SIZE = 10;
        this.board = [];
        this.ships = [];
        this.initializeBoard();
    }
    initializeBoard(){
        for(let i=0; i< this.SIZE; i++){
            let row = [];
            for(let j=0; j< this.SIZE; j++){
                row.push(new cell());
            }
            this.board.push(row);
        }
    }
    addShip(length,cord, isHorizontal){

        const [startingPoint, endingPoint] = this.getStartEndPoints(length, cord, isHorizontal);
        
        if(!this.isPlacementPossible(startingPoint, endingPoint, isHorizontal)){
            return false;
        }

        const newShip = new Ship(length);
        this.ships.push(newShip);
        
        if(isHorizontal){
            const rowIdx = startingPoint[0];
            for(let i = startingPoint[1]; i <= endingPoint[1]; i++) {
                this.board[rowIdx][i].addToken(length);
            }
        }
        else{
            let colIdx = startingPoint[1];
            for(let i = startingPoint[0]; i <= endingPoint[0]; i++) {
                this.board[i][colIdx].addToken(length);
            }
        }

        return true;

    }
    /*determines whether or not the attack hit a ship and then sends the ‘hit’ function 
    to the correct ship, or records the coordinates of the missed shot.*/
    receiveAttack(cord){
        let [rowIdx, colIdx] = cord;
        
        if(this.board[rowIdx][colIdx].hasShip()) {
            this.ships.forEach(ship => {
                if(ship.length == this.board[rowIdx][colIdx].getValue()){
                    ship.hit();
                }
            })
            // this.board[cord[0]][cord[1]].hitCell();
            // return true;
        } 
        // else { // missed shoot
        //     this.board[cord[0]][cord[1]].hitCell();
        //     return false;
        // }
        return this.board[rowIdx][colIdx].hit();

    }

    isAllShipsSunk(){
        return this.ships.every((ship) => ship.isSunk());
    }

    isOccupiedCell(cord){
        return this.board[cord[0]][cord[1]].isHited();
    }

    isPlacementPossible(startingPoint, endingPoint, isHorizontal){
        // we should check that these two points exist in the board
        // we should check that they are empty, so the points between them.
        if(endingPoint[0] >= this.SIZE || endingPoint[1] >= this.SIZE){
            return false;
        }
        if(isHorizontal){
            const rowIdx = startingPoint[0];
            for(let i = startingPoint[1]; i <= endingPoint[1]; i++) {
                if(this.board[rowIdx][i].hasShip()) return false; // hasShip in cell
            }
        }
        else{
            const colIdx = startingPoint[1];
            for(let i = startingPoint[0]; i <= endingPoint[0]; i++) {
                if(this.board[i][colIdx].hasShip()) return false;
            }
        }
        return true;
    }

    getStartEndPoints(length, cord, isHorizontal){
        const startingPoint = cord;
        const endingPoint = (isHorizontal) ? [cord[0], cord[1]+length-1] : [cord[0]+length-1, cord[1]];
        return [startingPoint, endingPoint];
    }

    getBoard(){
        return this.board;
    }

}

export {GameBoard};
