import { ScreenController } from "./modules/view/screenController.js";

let playerName = '';
// let backgroundSound = new Audio();
// backgroundSound.src = 'assets/sounds/music.mp3';


document.querySelector('.start-btn').addEventListener('click',(e) => {
    e.preventDefault();
    playerName = document.querySelector('input[type=text]').value;
    if(playerName != ''){
        ScreenController(playerName);
    }
});

document.querySelector('#new-game-btn').addEventListener('click',() => {
    document.querySelector('#winner-msg-cart').classList.toggle('active');
    ScreenController(playerName);
})