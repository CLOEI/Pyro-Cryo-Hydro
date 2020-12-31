const main = document.querySelector('game');
const next = document.querySelector('.dialog');
const close = document.querySelector('.close');
const info = document.querySelector('.info');
const dialogContainer = document.querySelector('#box');

// Nav
const infoText = document.querySelector('.info-text');
// Dialog
const dialogText = document.querySelector('.dialog--text');
const dialogName = document.querySelector('.dialog--name');
let dialogNum = 0;

next.addEventListener('click', e => {
    console.log('Nyaaa~');
    switch (dialogNum) {
        case 0:
            break;
        case 5:
            dialogText.innerHTML = 'did u did something to me traveler?';
            break;
        case 9:
            dialogName.innerHTML = 'Traveler';
            dialogText.innerHTML = 'Onii-chan ;-;';
            break;
        default:
            dialogName.innerHTML = 'CLOEI';
            dialogText.innerHTML = 'I think i ate something wrong.... bye traveler';
            break;
    }
    dialogNum++;
})


close.addEventListener('click', e => {
    info.style.display = 'none';
    dialogContainer.style.display = 'initial';
})

infoText.addEventListener('click', e => {
    info.style.display = 'initial';
    dialogContainer.style.display = 'none';
})