import { GameController } from "../factories/gameController.js";

const ScreenController = (playerName) => {
  let game = new GameController(playerName);
  placeShips();

  function placeShips() {
    clearDom();
    const content = document.querySelector(".content");
    content.innerHTML = `<h1>place your ships</h1>
        <button id="rotate-ship-btn">Rotate Ship</button>
        <div id="place-ships-grid" class="grid"></div>
        <div class="buttons">
        <button id="start-game-btn">Start</button>
        <button id="random-btn">Random</button>
        </div>`;

    const grid = document.querySelector("#place-ships-grid");
    generateGrid(grid);
    addShipPlacementEventListeners(grid);
    addStartGameEventListener();
    addRotateShipEventListener();
    addRandomPlacementEventListener();
  }

  function generateGrid(grid){
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        grid.innerHTML += `<div class="cell" data-x="${i}" data-y="${j}"></div>`;
      }
    }
  }

  function addShipPlacementEventListeners(grid){
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        let cord = [Number(cell.dataset.x), Number(cell.dataset.y)];
        if(game.addShip(cord)){
          updateGrid(cell);
        }
      });
    });
  }

  function addStartGameEventListener() {
    const startBtn = document.querySelector("#start-game-btn");
    startBtn.addEventListener("click", startGame);
  }

  function addRotateShipEventListener() {
    const rotateShipBtn = document.querySelector("#rotate-ship-btn");
    rotateShipBtn.addEventListener("click", () => game.rotatePlayerShip());
  }

  function addRandomPlacementEventListener() {
    const randomPlacement = document.querySelector("#random-btn");
    randomPlacement.addEventListener("click", () => {
      game.placeShipsRandomaly();
      updateGrid();
    });
  }

  function updateGrid(){

    let board = game.getPlayerGameBoard();

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (board[i][j].hasShip()) {
            const cell = document.querySelector(`[data-x="${i}"][data-y="${j}"]`);
            cell.classList.add('ship');
          }
        }
    }
  }

  function startGame() {
    if(game.isGameReady()){
      clearDom();
      renderGameBoard();
    }
  }

  function renderGameBoard() {
    const content = document.querySelector(".content");
    content.innerHTML = `<div id="player-ships" class="grid"></div>
        <div id="ai-ships" class="grid"></div>`;
    content.classList.add('active');

    const aiGrid = document.querySelector("#ai-ships");
    const playerGrid = document.querySelector("#player-ships");

    generatePlayerGrid(playerGrid);
    generateAiGrid(aiGrid);
    addAiCellEventListeners(aiGrid);
  }

  function generatePlayerGrid(playerGrid) {
    let board = game.getPlayerGameBoard();
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        playerGrid.innerHTML += `<div class="cell player-cell" data-playerx="${i}" data-playery="${j}"></div>`;
        // show the ships of the player in his grid so he can 
          // see them while they were attacked by the Ai
        if (board[i][j].hasShip()) {
          playerGrid.lastElementChild.classList.add("ship");
        }
      }
    }
  }

  function generateAiGrid(aiGrid){
    
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        aiGrid.innerHTML += `<div class="cell ai-cell" data-aix="${i}" data-aiy="${j}"></div>`; 
      }
    }
  }

  function addAiCellEventListeners(aiGrid) {
    const cells = document.querySelectorAll(".ai-cell");
    cells.forEach((cell) => cell.addEventListener("click", hittingHandler));
  }

  function hittingHandler() {
    let cord = [this.dataset.aix, this.dataset.aiy];
    let info = game.playRound(cord);

    handlePlayerHit(info.isPlayerHit, this);
    if(game.isGameOver()){
      handleWinning(info);
    }
    else{
      handleAiHit(info.isAiHit, info.aiMove);
    }
    this.removeEventListener("click", hittingHandler);
  }

  function handleWinning(info){
    const winner = game.getWinner(); 
    if(winner == 'ai'){
      handleAiHit(info.isAiHit, info.aiMove);
    }
    finishGame(winner);
  }

  function handlePlayerHit(hasHitShip, cell){
    if(hasHitShip){
      cell.classList.add("hit-ship");
    }
    else {
      cell.classList.add("not-hit");
    }
  }

  function handleAiHit(hasHitShip, cord){
    let [x, y] = cord;
    const playerCell = document.querySelector(
      `[data-playerx="${x}"][data-playery="${y}"]`,
    );

    if (hasHitShip) {
      playerCell.classList.add("hit-ship");
    } else {
      playerCell.classList.add("not-hit");
    }
  }

  function finishGame(winner){
    const winnerMsg = document.querySelector('#winner-msg');
    winnerMsg.textContent = (winner == 'ai')? 'Computer is the Winner' : 'You are the winner';

    document.querySelector('#winner-msg-cart').classList.add('active');
    document.querySelectorAll('.ai-cell').forEach(cell => {
      cell.classList.remove('ai-cell');
      cell.removeEventListener('click', hittingHandler);
    });
  }
  
  function clearDom() {
    const content = document.querySelector(".content");
    content.innerHTML = "";
  }
};

export { ScreenController };
