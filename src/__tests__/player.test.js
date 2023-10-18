import { Player } from "../modules/factories/player";
const player = new Player('ali');


test('test add ship', () => {
    expect(player.addShip([1,3])).toBe(true);
    expect(player.addShip([1,6])).toBe(false);
    expect(player.addShip([2,2])).toBe(true);

    expect(player.addShip([0,0])).toBe(true);
    expect(player.addShip([4,9])).toBe(true);
    expect(player.addShip([9,9])).toBe(true);
    console.log(player.getGameBoard());
})

