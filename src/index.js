import { ScreenController } from "./modules/view/screenController.js";

let screen;

document.querySelector('.start-btn').addEventListener('click',(e) => {
    e.preventDefault();
    const Name = document.querySelector('#palyer-name');
    ScreenController(Name);
})