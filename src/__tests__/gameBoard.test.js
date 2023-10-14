import { GameBoard } from "../modules/gameBoard";
const gameBoard = new GameBoard();


test("test ending point", () => {
    expect(gameBoard.getEndingPoint(5,[9,9], true)).toEqual([9,13]);
    expect(gameBoard.getEndingPoint(5,[9,4], true)).toEqual([9,8]);
    expect(gameBoard.getEndingPoint(5,[0,0], true)).toEqual([0,4]);
    expect(gameBoard.getEndingPoint(5,[3,4], true)).toEqual([3,8]);
    expect(gameBoard.getEndingPoint(5,[9,9], false)).toEqual([13,9]);
    expect(gameBoard.getEndingPoint(5,[9,0], false)).toEqual([13,0]);
    expect(gameBoard.getEndingPoint(5,[0,0], false)).toEqual([4,0]);
})

test("test empty cells", () => {
    expect(gameBoard.emptyCells([])).toBe(false);
    expect(gameBoard.emptyCells(5,[0,0],true)).toBe(true);
    expect(gameBoard.emptyCells(1,[9,8],true)).toBe(true);
    expect(gameBoard.emptyCells(5,[0,9],true)).toBe(false);
    expect(gameBoard.emptyCells(5,[9,9],false)).toBe(false);
    expect(gameBoard.emptyCells(5,[9,3],false)).toBe(false);
})