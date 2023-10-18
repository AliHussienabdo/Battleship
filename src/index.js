import { ScreenController } from "./view/screenController.js";

let screen;

document.querySelector('.start-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('#player-name');
    if(nameInput.value == '') return;
    screen = new ScreenController(nameInput.value);
});