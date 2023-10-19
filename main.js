/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_view_screenController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/view/screenController.js */ \"./src/modules/view/screenController.js\");\n\r\n\r\nlet screen;\r\n\r\ndocument.querySelector('.start-btn').addEventListener('click',(e) => {\r\n    e.preventDefault();\r\n    const Name = document.querySelector('#palyer-name');\r\n    (0,_modules_view_screenController_js__WEBPACK_IMPORTED_MODULE_0__.ScreenController)(Name);\r\n})\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/factories/AiPlayer.js":
/*!*******************************************!*\
  !*** ./src/modules/factories/AiPlayer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ai: () => (/* binding */ Ai)\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/modules/factories/player.js\");\n\r\n\r\nclass Ai{\r\n    constructor(){\r\n        this.player = new _player_js__WEBPACK_IMPORTED_MODULE_0__.Player('Ai');\r\n        this.moves = [];\r\n        this.player.placeShipsRandomaly();\r\n    }\r\n\r\n    move () {\r\n        let cord = this.getRandomCoord();\r\n        // we bush the array as string because there is no comparison between two arrays in js\r\n        while(this.moves.includes(cord.join(''))){\r\n            cord = this.getRandomCoord(); \r\n        }\r\n        this.moves.push(cord.join(''));\r\n        return cord;\r\n    }\r\n\r\n    hit(cord){\r\n        return this.player.hit(cord);\r\n    }\r\n\r\n    hasLost(){\r\n        return this.player.hasLost();\r\n    }\r\n\r\n    getGameBoard(){\r\n        return this.player.getGameBoard();\r\n    }\r\n\r\n    getRandomCoord (){\r\n        return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];\r\n    }\r\n    \r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/factories/AiPlayer.js?");

/***/ }),

/***/ "./src/modules/factories/cell.js":
/*!***************************************!*\
  !*** ./src/modules/factories/cell.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cell: () => (/* binding */ cell)\n/* harmony export */ });\nclass cell {\r\n  constructor() {\r\n    this.shipNum = 0;\r\n    this.hited = false;\r\n  }\r\n  addToken(val) {\r\n    this.shipNum = val;\r\n  }\r\n  hasShip() {\r\n    return this.shipNum > 0;\r\n  }\r\n  getValue() {\r\n    return this.shipNum;\r\n  }\r\n\r\n  isHited() {\r\n    return this.hited;\r\n  }\r\n\r\n  hit() {\r\n    this.hited = true;\r\n    if (this.hasShip()) {\r\n      this.shipNum = -2;\r\n      return true;\r\n    }\r\n    this.shipNum = -1;\r\n    return false;\r\n  }\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/factories/cell.js?");

/***/ }),

/***/ "./src/modules/factories/gameBoard.js":
/*!********************************************!*\
  !*** ./src/modules/factories/gameBoard.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameBoard: () => (/* binding */ GameBoard)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/modules/factories/ship.js\");\n/* harmony import */ var _cell_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell.js */ \"./src/modules/factories/cell.js\");\n\r\n\r\n\r\nclass GameBoard {\r\n    constructor(){\r\n        this.SIZE = 10;\r\n        this.board = [];\r\n        this.ships = [];\r\n        this.initializeBoard();\r\n    }\r\n    initializeBoard(){\r\n        for(let i=0; i< this.SIZE; i++){\r\n            let row = [];\r\n            for(let j=0; j< this.SIZE; j++){\r\n                row.push(new _cell_js__WEBPACK_IMPORTED_MODULE_1__.cell());\r\n            }\r\n            this.board.push(row);\r\n        }\r\n    }\r\n    addShip(length,cord, isHorizontal){\r\n\r\n        const [startingPoint, endingPoint] = this.getStartEndPoints(length, cord, isHorizontal);\r\n        \r\n        if(!this.isPlacementPossible(startingPoint, endingPoint, isHorizontal)){\r\n            return false;\r\n        }\r\n\r\n        const newShip = new _ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(length);\r\n        this.ships.push(newShip);\r\n        \r\n        if(isHorizontal){\r\n            const rowIdx = startingPoint[0];\r\n            for(let i = startingPoint[1]; i <= endingPoint[1]; i++) {\r\n                this.board[rowIdx][i].addToken(length);\r\n            }\r\n        }\r\n        else{\r\n            let colIdx = startingPoint[1];\r\n            for(let i = startingPoint[0]; i <= endingPoint[0]; i++) {\r\n                this.board[i][colIdx].addToken(length);\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n    /*determines whether or not the attack hit a ship and then sends the ‘hit’ function \r\n    to the correct ship, or records the coordinates of the missed shot.*/\r\n    receiveAttack(cord){\r\n        let [rowIdx, colIdx] = cord;\r\n        \r\n        if(this.board[rowIdx][colIdx].hasShip()) {\r\n            this.ships.forEach(ship => {\r\n                if(ship.length == this.board[rowIdx][colIdx].getValue()){\r\n                    ship.hit();\r\n                }\r\n            })\r\n        } \r\n        return this.board[rowIdx][colIdx].hit();\r\n\r\n    }\r\n\r\n    isAllShipsSunk(){\r\n        return this.ships.every((ship) => ship.isSunk());\r\n    }\r\n\r\n    isOccupiedCell(cord){\r\n        return this.board[cord[0]][cord[1]].isHited();\r\n    }\r\n\r\n    isPlacementPossible(startingPoint, endingPoint, isHorizontal){\r\n        // we should check that these two points exist in the board\r\n        // we should check that they are empty, so the points between them.\r\n        if(endingPoint[0] >= this.SIZE || endingPoint[1] >= this.SIZE){\r\n            return false;\r\n        }\r\n        if(isHorizontal){\r\n            const rowIdx = startingPoint[0];\r\n            for(let i = startingPoint[1]; i <= endingPoint[1]; i++) {\r\n                if(this.board[rowIdx][i].hasShip()) return false; // hasShip in cell\r\n            }\r\n        }\r\n        else{\r\n            const colIdx = startingPoint[1];\r\n            for(let i = startingPoint[0]; i <= endingPoint[0]; i++) {\r\n                if(this.board[i][colIdx].hasShip()) return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n\r\n    getStartEndPoints(length, cord, isHorizontal){\r\n        const startingPoint = cord;\r\n        const endingPoint = (isHorizontal) ? [cord[0], cord[1]+length-1] : [cord[0]+length-1, cord[1]];\r\n        return [startingPoint, endingPoint];\r\n    }\r\n\r\n    getBoard(){\r\n        return this.board;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/factories/gameBoard.js?");

/***/ }),

/***/ "./src/modules/factories/gameController.js":
/*!*************************************************!*\
  !*** ./src/modules/factories/gameController.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameController: () => (/* binding */ GameController)\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/modules/factories/player.js\");\n/* harmony import */ var _AiPlayer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AiPlayer.js */ \"./src/modules/factories/AiPlayer.js\");\n\r\n\r\n\r\n// we need a game controller\r\n\r\nclass GameController{\r\n    constructor(name){\r\n        this.player = new _player_js__WEBPACK_IMPORTED_MODULE_0__.Player(name);\r\n        this.ai = new _AiPlayer_js__WEBPACK_IMPORTED_MODULE_1__.Ai();\r\n    }\r\n    addPlayerShips(cord){\r\n        return this.player.addShip(cord);\r\n    }\r\n    placeShipsRandomaly(){\r\n        this.player.placeShipsRandomaly();\r\n    }\r\n    playRound(cord){\r\n        let randomMove = this.ai.move();\r\n        return {\r\n            isPlayerHit: this.dropToken(this.ai, cord),\r\n            isAiHit: this.dropToken(this.player, randomMove),\r\n            aiMove: randomMove\r\n        };\r\n    }\r\n    dropToken(player, cord){\r\n        return player.hit(cord);\r\n    }\r\n    isGameOver(){\r\n        return this.player.hasLost() || this.ai.hasLost();\r\n    }\r\n\r\n    getWinner(){\r\n        if(this.isGameOver()){\r\n            if(this.ai.hasLost()){ \r\n                return 'player';\r\n            }\r\n            else return 'ai';\r\n        }\r\n        return false;\r\n    }\r\n    gameInfo(){\r\n        if(this.player.hasLost());\r\n    }\r\n    getPlayerGameBoard(){\r\n        return this.player.getGameBoard();\r\n    }\r\n    getAiGameBoard(){\r\n        return this.ai.getGameBoard();\r\n    }\r\n\r\n    getActivePlayer(){\r\n        return activePlayer;\r\n    }\r\n    \r\n    switchActivePlayer(){\r\n        this.activePlayer = this.activePlayer == this.players[0] ? this.players[1] : this.players[0];\r\n    }\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/factories/gameController.js?");

/***/ }),

/***/ "./src/modules/factories/player.js":
/*!*****************************************!*\
  !*** ./src/modules/factories/player.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard.js */ \"./src/modules/factories/gameBoard.js\");\n\r\nclass Player{\r\n    constructor(name){\r\n        this.name = name;\r\n        this.shipsNum = 5;\r\n        this.shipsDirHoriz = true;\r\n        this.gameBoard = new _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__.GameBoard();\r\n    }\r\n\r\n    addShip(cord){\r\n        if(this.shipsNum == 0) return false;\r\n        if(this.gameBoard.addShip(this.shipsNum, cord, this.shipsDirHoriz)){\r\n            this.shipsNum--;\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n\r\n    getName(){\r\n        return this.name;\r\n    }\r\n\r\n    rotateShip(){\r\n        return this.shipsDirHoriz = !this.shipsDirHoriz;\r\n    }\r\n\r\n    hit(cord){\r\n        return this.gameBoard.receiveAttack(cord);\r\n    }\r\n\r\n    hasLost(){\r\n        return this.gameBoard.isAllShipsSunk();\r\n    }\r\n\r\n    allShipsReady(){\r\n        return this.shipsNum == 0;\r\n    }\r\n\r\n    isConqured(cord){\r\n        return this.gameBoard.isOccupiedCell(cord);\r\n    }\r\n\r\n    getGameBoard(){\r\n        return this.gameBoard.getBoard();\r\n    }\r\n\r\n    placeShipsRandomaly(){\r\n        while(!this.allShipsReady()) {\r\n            this.addShip([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]); \r\n            if(Math.random() < 0.5){ // change the direction randomly\r\n                this.rotateShip();\r\n            }\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/factories/player.js?");

/***/ }),

/***/ "./src/modules/factories/ship.js":
/*!***************************************!*\
  !*** ./src/modules/factories/ship.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship{\r\n    constructor(length){\r\n        this.length = length;\r\n        this.NumHits = 0;\r\n    }\r\n    hit(){\r\n        this.NumHits++;\r\n    }\r\n    isSunk(){\r\n        return this.NumHits === this.length;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/factories/ship.js?");

/***/ }),

/***/ "./src/modules/view/screenController.js":
/*!**********************************************!*\
  !*** ./src/modules/view/screenController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ScreenController: () => (/* binding */ ScreenController)\n/* harmony export */ });\n/* harmony import */ var _factories_gameController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/gameController.js */ \"./src/modules/factories/gameController.js\");\n\r\n\r\nconst ScreenController = (playerName) => {\r\n\r\n    let game = new _factories_gameController_js__WEBPACK_IMPORTED_MODULE_0__.GameController(playerName);\r\n    placeShips();\r\n\r\n    function placeShips(){\r\n        clearDom();\r\n        game.placeShipsRandomaly();\r\n        let board = game.getPlayerGameBoard();\r\n        rederShips(board);\r\n    }\r\n    function rederShips(board){\r\n        const content = document.querySelector('.content');\r\n        content.innerHTML = \r\n        `<h1>place your ships</h1>\r\n        <button id=\"change-axis\">X axis</button>\r\n        <div id=\"place-ships-grid\" class=\"grid\"></div>\r\n        <button id=\"start-game-btn\">Start</button>`;\r\n\r\n        const grid = document.querySelector('#place-ships-grid');\r\n\r\n        for(let i = 0; i < 10; i++) {\r\n            for(let j = 0; j < 10; j++) {\r\n                grid.innerHTML += `<div class=\"cell\" data-x=\"${i}\" data-y=\"${j}\"></div>`;\r\n                if(board[i][j].hasShip()){\r\n                    grid.lastChild.classList.add('ship');\r\n                    console.log('yes')\r\n                }\r\n            }\r\n        }\r\n\r\n        const startBtn = document.querySelector('#start-game-btn');\r\n        startBtn.addEventListener('click', startGame);\r\n    }\r\n    function startGame(){\r\n        clearDom();\r\n        let board = game.getPlayerGameBoard();\r\n        renderGameBoard(board);\r\n    }\r\n\r\n    function renderGameBoard(board){\r\n        \r\n        const content = document.querySelector('.content');\r\n        content.innerHTML = \r\n        `<div id=\"ai-grid\" class=\"grid\"></div>\r\n        <div id=\"player-grid\" class=\"grid\"></div>`;\r\n\r\n        const aiGrid = document.querySelector('#ai-grid');\r\n        const playerGrid = document.querySelector('#player-grid');\r\n\r\n        for(let i = 0; i < 10; i++) {\r\n            for(let j = 0; j < 10; j++) {\r\n                playerGrid.innerHTML += `<div class=\"cell ai-cell\" data-playerx=\"${i}\" data-playery=\"${j}\"></div>`;\r\n                aiGrid.innerHTML += `<div class=\"cell\" data-aix=\"${i}\" data-aiy=\"${j}\"></div>`;\r\n                if(board[i][j].hasShip()){\r\n                    aiGrid.lastElementChild.classList.add('ship');\r\n                }\r\n            }\r\n        }\r\n\r\n        const cells = document.querySelectorAll('.ai-cell');\r\n        cells.forEach(cell => cell.addEventListener('click', hittingHandler));\r\n    }\r\n\r\n    function hittingHandler(e){\r\n        \r\n        let cord = [e.target.dataset.playerx, e.target.dataset.playery];\r\n        let info = game.playRound(cord);\r\n\r\n        if(info.isPlayerHit){\r\n            e.target.classList.add('hit-ship');\r\n        }\r\n        else {\r\n            e.target.classList.add('not-hit');\r\n        }\r\n\r\n        checkWinner();\r\n\r\n        let [x,y] = info.aiMove;\r\n        const playerCell = document.querySelector(`[data-aix=\"${x}\"][data-aiy=\"${y}\"]`);\r\n\r\n        if(info.isAiHit){\r\n            playerCell.classList.add('hit-ship');\r\n        }\r\n        else{\r\n            playerCell.classList.add('not-hit');\r\n        }\r\n        e.target.removeEventListener('click', hittingHandler);\r\n    }\r\n\r\n    function checkWinner(){\r\n        if(game.isGameOver()){\r\n            clearDom();\r\n            const content = document.querySelector('.content');\r\n            const winner = game.getWinner();\r\n            if(winner == 'player'){\r\n                content.innerHTML = 'You are the Winner';\r\n            }\r\n            else {\r\n                // ai wins the game\r\n                content.innerHTML = 'Ai is the winner';\r\n            }\r\n        }\r\n    }\r\n\r\n    function clearDom(){\r\n        const content = document.querySelector('.content');\r\n        content.innerHTML = '';\r\n    }\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/view/screenController.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;