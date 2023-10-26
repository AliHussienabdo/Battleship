import { ScreenController } from "./modules/view/screenController.js";

let playerName = '';

document.querySelector('.start-btn').addEventListener('click',(e) => {
    e.preventDefault();
    playerName = document.querySelector('input[type=text]').value;
    if(playerName != ''){
        ScreenController(playerName);
    }
});

document.querySelector('#new-game-btn').addEventListener('click',() => {
    document.querySelector('#winner-msg-cart').classList.toggle('active');
    document.querySelector('.content').classList.remove('blur-content');
    ScreenController(playerName);
})