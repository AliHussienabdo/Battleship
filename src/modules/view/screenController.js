import { GameController } from "../factories/gameController.js";

const ScreenController = (playerName) => {

    let game = new GameController(playerName);
    placeShips();

    function placeShips(){
        clearDom();
        game.placeShipsRandomaly();
        let board = game.getPlayerGameBoard();
        rederShips(board);
    }
    function rederShips(board){
        const content = document.querySelector('.content');
        content.innerHTML = 
        `<h1>place your ships</h1>
        <button id="change-axis">X axis</button>
        <div id="place-ships-grid" class="grid"></div>
        <button id="start-game-btn">Start</button>`;

        const grid = document.querySelector('#place-ships-grid');

        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < 10; j++) {
                grid.innerHTML += `<div class="cell" data-x="${i}" data-y="${j}"></div>`;
                if(board[i][j].hasShip()){
                    grid.lastChild.classList.add('ship');
                    console.log('yes')
                }
            }
        }

        const startBtn = document.querySelector('#start-game-btn');
        startBtn.addEventListener('click', startGame);
    }
    function startGame(){
        clearDom();
        let board = game.getPlayerGameBoard();
        renderGameBoard(board);
    }

    function renderGameBoard(board){
        
        const content = document.querySelector('.content');
        content.innerHTML = 
        `<div id="ai-grid" class="grid"></div>
        <div id="player-grid" class="grid"></div>`;

        const aiGrid = document.querySelector('#ai-grid');
        const playerGrid = document.querySelector('#player-grid');

        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < 10; j++) {
                playerGrid.innerHTML += `<div class="cell ai-cell" data-playerx="${i}" data-playery="${j}"></div>`;
                aiGrid.innerHTML += `<div class="cell" data-aix="${i}" data-aiy="${j}"></div>`;
                if(board[i][j].hasShip()){
                    aiGrid.lastElementChild.classList.add('ship');
                }
            }
        }

        const cells = document.querySelectorAll('.ai-cell');
        cells.forEach(cell => cell.addEventListener('click', hittingHandler));
    }

    function hittingHandler(e){
        
        let cord = [e.target.dataset.playerx, e.target.dataset.playery];
        let info = game.playRound(cord);

        if(info.isPlayerHit){
            e.target.classList.add('hit-ship');
        }
        else {
            e.target.classList.add('not-hit');
        }

        checkWinner();

        let [x,y] = info.aiMove;
        const playerCell = document.querySelector(`[data-aix="${x}"][data-aiy="${y}"]`);

        if(info.isAiHit){
            playerCell.classList.add('hit-ship');
        }
        else{
            playerCell.classList.add('not-hit');
        }
        e.target.removeEventListener('click', hittingHandler);
    }

    function checkWinner(){
        if(game.isGameOver()){
            clearDom();
            const content = document.querySelector('.content');
            const winner = game.getWinner();
            if(winner == 'player'){
                content.innerHTML = 'You are the Winner';
            }
            else {
                // ai wins the game
                content.innerHTML = 'Ai is the winner';
            }
        }
    }

    function clearDom(){
        const content = document.querySelector('.content');
        content.innerHTML = '';
    }
}

export { ScreenController };

