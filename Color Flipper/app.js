const bodyEl = document.querySelector('body');
const blueBtnEl = document.querySelector('.blue');
const redBtnEl = document.querySelector('.red');
const yellowBtnEl = document.querySelector('.yellow');
const purpleBtnEl = document.querySelector('.purple');
const greenBtnEl = document.querySelector('.green');
const randomBtnEl = document.querySelector('.random');

blueBtnEl.addEventListener('click', () => setColor('blue'));
redBtnEl.addEventListener('click', () => setColor('red'));
yellowBtnEl.addEventListener('click', () => setColor('yellow'));
purpleBtnEl.addEventListener('click', () => setColor('purple'));
greenBtnEl.addEventListener('click', () => setColor('green'));
randomBtnEl.addEventListener('click', () => randomColor());

function setColor(name) {
    bodyEl.style.backgroundColor = name;
}
 
function randomColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`;
    bodyEl.style.backgroundColor = color;
}
