import { ScreenController } from "./modules/view/screenController.js";

let playerName = '';

document.querySelector('.start-btn').addEventListener('click',(e) => {
    e.preventDefault();
    const Name = document.querySelector('input[type=text]').value;
    playerName = Name;
    ScreenController(playerName);
});

document.querySelector('#new-game-btn').addEventListener('click',() => {
    document.querySelector('#winner-msg-cart').classList.toggle('active');
    document.querySelector('.content').classList.toggle('active');
    ScreenController(playerName);
})