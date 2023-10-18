import { GameController } from "./modules/factories/gameController.js";

class ScreenController{
    constructor(playerName){
        this.game = new GameController(playerName);
        this.placeShips();
    }
    placeShips(){
        this.clearDom();
        this.placingShipsDOM();
    }
    placingShipsDOM(){
        this.renderPlacingShipsMOOD();
    }
    renderPlacingShipsMOOD(){
        const content = document.querySelector('.content');
        content.innerHTML = 
        `<h1>place your ships</h1>
        <button id="change-axis">X axis</button>
        <div id="place-ships-grid"></div>
        <button id="start-game">Start</button>`;

        const grid = document.querySelector('#place-ships-grid');

        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < 10; j++) {
                grid.innerHTML += `<div class="cell" data-x="${i}" data-y="${j}"></div>`
            }
        }
    }
    clearDom(){
        const content = document.querySelector('.content');
        content.innerHTML = '';
    }
}

export { ScreenController };

