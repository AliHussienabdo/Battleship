import { GameBoard } from "../modules/factories/gameBoard.js";
let gameBoard = new GameBoard();


test("test ending point", () => {
    expect(gameBoard.getStartEndPoints(5,[9,9], true)).toEqual([9,13]);
    expect(gameBoard.getStartEndPoints(5,[9,4], true)).toEqual([9,8]);
    expect(gameBoard.getStartEndPoints(5,[0,0], true)).toEqual([0,4]);
    expect(gameBoard.getStartEndPoints(5,[3,4], true)).toEqual([3,8]);
    expect(gameBoard.getStartEndPoints(5,[9,9], false)).toEqual([13,9]);
    expect(gameBoard.getStartEndPoints(5,[9,0], false)).toEqual([13,0]);
    expect(gameBoard.getStartEndPoints(5,[0,0], false)).toEqual([4,0]);
});



test('Check Placement of the Ship', () => {
    let dir = true;
    let [st,en] = gameBoard.getStartEndPoints(5,[9,9], dir);
    expect(gameBoard.isPlacementPossible(st,en,dir)).toBe(false);

    [st,en] = gameBoard.getStartEndPoints(5,[3,4],dir);
     expect(gameBoard.isPlacementPossible(st,en,dir)).toBe(true);

    [st,en] = gameBoard.getStartEndPoints(1,[3,4],dir);
     expect(gameBoard.isPlacementPossible(st,en,dir)).toBe(true);

    [st,en] = gameBoard.getStartEndPoints(5,[9,4],dir);
     expect(gameBoard.isPlacementPossible(st,en,dir)).toBe(true);

     [st,en] = gameBoard.getStartEndPoints(1,[9,9],dir);
     expect(gameBoard.isPlacementPossible(st,en,dir)).toBe(true);

     dir = false;

     [st,en] = gameBoard.getStartEndPoints(1,[0,0],dir);
     expect(gameBoard.isPlacementPossible(st,en,dir)).toBe(true);

     [st,en] = gameBoard.getStartEndPoints(5,[9,0],dir);
     expect(gameBoard.isPlacementPossible(st,en,dir)).toBe(false);

     [st,en] = gameBoard.getStartEndPoints(5,[0,9],dir);
     expect(gameBoard.isPlacementPossible(st,en,dir)).toBe(true);

     [st,en] = gameBoard.getStartEndPoints(5,[5,9],dir);
     expect(gameBoard.isPlacementPossible(st,en,dir)).toBe(true);

     [st,en] = gameBoard.getStartEndPoints(3,[7,4],dir);
     expect(gameBoard.isPlacementPossible(st,en,dir)).toBe(true);

     [st,en] = gameBoard.getStartEndPoints(5,[5,4],dir);
     expect(gameBoard.isPlacementPossible(st,en,dir)).toBe(true);

     [st,en] = gameBoard.getStartEndPoints(5,[6,4],dir);
     expect(gameBoard.isPlacementPossible(st,en,dir)).toBe(false);


});


test('adding ship horizontal position', () => {
    let dir = true;

    expect(gameBoard.addShip(5,[0,0],dir)).toBe(true);
    console.log(gameBoard.getBoard());
    expect(gameBoard.addShip(4,[0,4],dir)).toBe(false);
    console.log(gameBoard.getBoard());
    expect(gameBoard.addShip(3,[0,5],dir)).toBe(true);
    console.log(gameBoard.getBoard());
    expect(gameBoard.addShip(2,[0,8],dir)).toBe(true);
    console.log(gameBoard.getBoard());
    expect(gameBoard.addShip(1,[0,9],dir)).toBe(false);
    console.log(gameBoard.getBoard());
})

test('adding ships virtical position', () => {

    let dir = false;
    expect(gameBoard.addShip(5,[0,0],dir)).toBe(true);
    expect(gameBoard.addShip(4,[4,0],dir)).toBe(false);
    expect(gameBoard.addShip(3,[5,0],dir)).toBe(true);
    expect(gameBoard.addShip(2,[8,0],dir)).toBe(true);
    expect(gameBoard.addShip(1,[9,0],dir)).toBe(false);
    console.log(gameBoard.getBoard());

})