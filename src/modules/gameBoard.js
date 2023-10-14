import { Ship } from "./ship.js";

class GameBoard {
    constructor(){
        // 0 mens no ship there 
        // 1 means there is a ship
        // -1 means hited but not ship
        // -2 means hited a ship
        this.board = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];
        /*
            [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 4, 4, 4, 4, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [0, 0, 0, 0, 0, 0, 5, 0, 0, 2],
            [0, 0, 0, 0, 0, 0, 5, 0, 0, 0],
            [0, 3, 3, 3, 0, 0, 5, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 5, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 5, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        */

        this.ships = [];
    }
    addShip(length,cord, isHorizontal){

        const [startingPoint, endingPoint] = this.getStartEndPoints(length, cord, isHorizontal);
        
        if(!emptyCells(startingPoint, endingPoint)) return false;
        const newShip = Ship(length);
        this.ships.push(newShip);

        
        if(isHorizontal){
            const rowIdx = startingPoint[0];
            for(let i = startingPoint[1]; i <= endingPoint[1]; i++) {
                this.board[rowIdx][i] = length;
            }
        }
        else{
            let colIdx = startingPoint[1];
            for(let i = startingPoint[0]; i <= endingPoint[0]; i++) {
                this.board[i][colIdx] = length;
            }
        }

        return true;

    }
    /*determines whether or not the attack hit a ship and then sends the ‘hit’ function 
    to the correct ship, or records the coordinates of the missed shot.*/
    receiveAttack(cord){
        // missed shoot
        if(this.board[cord[0]][cord[1]] == 0){
            this.board[cord[0]][cord[1]] = -1;
            return false;
        }
        else if(this.board[cord[0]][cord[1]] > 0){
            this.ships.forEach(ship => {
                if(ship.length == this.board[cord[0]][cord[1]]){
                    ship.hit();
                }
            })
            this.board[cord[0]][cord[1]] = -2;
            return true;
        }

    }

    isShipsSunk(){
        this.ships.forEach(ship => {
            if(!ship.isSunk()){
                return false;
            }
        });
        return true;
    }

    emptyCells(startingPoint, endingPoint){
        
        // we should check that these two points exist in the board
        // we should check that they are empty, so the points between them.
        if(endingPoint[0] >= 10 || endingPoint[1] >= 10){
            return false;
        }
        if(startingPoint[0] == endingPoint[0]){
            const rowIdx = startingPoint[0];
            for(let i = startingPoint[1]; i <= endingPoint[1]; i++) {
                if(this.board[rowIdx][i] != 0) return false;
            }
        }
        else{
            let colIdx = startingPoint[1];
            for(let i = startingPoint[0]; i <= endingPoint[0]; i++) {
                if(this.board[i][colIdx] != 0) return false;
            }
        }
        return true;
    }

    getStartEndPoints(length, cord, isHorizontal){
        const startingPoint = cord;
        const endingPoint = (isHorizontal) ? [cord[0], cord[1]+length-1] : [cord[0]+length-1, cord[1]];
        return [startingPoint, endingPoint];
    }

}

export {GameBoard};
