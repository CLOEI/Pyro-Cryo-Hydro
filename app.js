const game = document.querySelector('.game');
const next = document.querySelector('.dialog');
const close = document.querySelector('.close');
const info = document.querySelector('.info');
const dialogContainer = document.querySelector('#box');
const about = document.querySelector('.about-text');

// Nav element
const infoText = document.querySelector('.info-text');
// Dialog element
const dialogText = document.querySelector('.dialog--text');
const dialogName = document.querySelector('.dialog--name');
// Game element
const elements = document.querySelector('.elements');
const travelerPoint = document.querySelector('.traveler .point');
const cloeiPoint = document.querySelector('.CLOEI .point');
// Global variable;
let dialogNum = 1;
let text = '';
let speed = 60;
let index = 0;
let traveler = 0;
let cloei = 0;

elements.addEventListener('click', e => {
    const element = ['pyro', 'cryo', 'hydro'];
    const randomNumber = Math.floor(Math.random() * Math.floor(3));
    const player = e.target.id;
    dialogText.innerHTML = '';
    dialogContainer.style.display = 'initial';
    dialogName.innerHTML = 'System';
    speed = 10;
    if(traveler != 5 && cloei != 5){
        if(player == element[randomNumber]){
            text = 'Traveler! i think CLOEI immune to it';
            doType();
        }else if(player == 'pyro' && element[randomNumber] == 'hydro'){
            console.log('CLOEI win');
            text = 'Oh no!, CLOEI countered your element!';
            doType();
            cloei++;
        }else if(player == 'hydro' && element[randomNumber] == 'pyro'){
            console.log('Player win')
            text = 'Traveler! it\'s a hit!';
            doType();
            traveler++;
        }else if(player == 'pyro' && element[randomNumber] == 'cryo'){
            console.log('Player win');
            text = 'Traveler! it\'s a hit!';
            doType();
            traveler++;
        }else if(player == 'cryo' && element[randomNumber] == 'pyro'){
            console.log('CLOEI win');
            text = 'Oh no!, CLOEI countered your element!';
            doType();
            cloei++;
        }else if(player == 'cryo' && element[randomNumber] == 'hydro'){
            console.log('Player win');
            text = 'Traveler! it\'s a hit!';
            doType();
            traveler++;
        }else if(player == 'hydro' && element[randomNumber] == 'cryo'){
            console.log('CLOEI win');
            text = 'Oh no!, CLOEI countered your element!';
            doType();
            cloei++;
        }
    }else{
        game.style.display = 'none';
        dialogContainer.style.display = 'initial';
        dialogText.innerHTML = '';
        dialogNum = 1;
        traveler = 0;
        cloei = 0;
        if(traveler == 5){
            dialogName.innerHTML = 'CLOEI';
            text = 'Well done traveler, you beat me on my own game.';
            doType();
        }else{
            dialogName.innerHTML = 'CLOEI';
            text = 'Well, i guess you will be staying here for a while..';
            doType();
        }
        next.addEventListener('click', writeDialog);
    }
    updateBoard();
})

const writeDialog = () => {
    dialogText.innerHTML = '';
    switch (dialogNum) {
        case 1:
            dialogName.innerHTML = 'CLOEI';
            text = 'Welcome to my game Traveler!';
            doType();
            break;
        case 2:
            dialogName.innerHTML = 'Traveler';
            text = 'w-where am I?!';
            doType();
            break;
        case 3:
            dialogName.innerHTML = 'CLOEI';
            text = 'This game will determine your destiny';
            doType();
            break;
        case 4:
            dialogName.innerHTML = 'Traveler';
            text = 'What destiny i don\'t care about destiny, just let me out!';
            doType();
            break;
        case 5:
            dialogName.innerHTML = 'CLOEI';
            text = 'Worry not, you can leave this realm if u beat me in a game!';
            doType();
            break;
        case 6:
            dialogName.innerHTML = 'Traveler';
            text = '... what game';
            doType();
            break;
        case 7:
            dialogName.innerHTML = 'CLOEI';
            text = 'A Element game';
            doType();
            break;
        case 8:
            dialogName.innerHTML = 'Traveler';
            text = 'Huh?';
            doType();
            break;
        case 9:
            dialogName.innerHTML = 'CLOEI';
            text = 'It basically a rock paper scissor game but instead of rock paper scissor, we use elements';
            doType();
            break;
        case 10:
            dialogName.innerHTML = 'CLOEI';
            text = 'Let me explain. Pyro is stronger than cryo, cryo stronger than hydro and hydro stronger than pyro. easy right?';
            doType();
            break;
        case 11:
            dialogName.innerHTML = 'CLOEI';
            text = 'Enough talk! Let the game begin!';
            doType();
            next.removeEventListener('click', writeDialog);
            setTimeout(() => {
                dialogContainer.style.display = 'none';
                game.style.display = 'initial';
            }, 3000);
            break;
    }
    dialogNum++;
}

const doType = () => {
    if(index < text.length){
        dialogText.innerHTML += text.charAt(index);
        index++;
        setTimeout(doType, speed);
    }else{
        index = 0;
    }
}

const updateBoard = () => {
    travelerPoint.innerHTML = traveler;
    cloeiPoint.innerHTML = cloei;
}

next.addEventListener('click', writeDialog);

close.addEventListener('click', e => {
    info.style.display = 'none';
    dialogContainer.style.display = 'initial';
})

infoText.addEventListener('click', e => {
    info.style.display = 'initial';
    document.querySelector('.head h1').innerHTML = 'How To Play?';
    document.querySelector('.content p').innerHTML = 'Pyro > Cryo > Hydro > Pyro'
    dialogContainer.style.display = 'none';
})

about.addEventListener('click', e => {
    info.style.display = 'initial';
    document.querySelector('.head h1').innerHTML = 'About';
    document.querySelector('.content p').innerHTML = 'All image are not mine, and i created this project for The Odin Project curriculum';
    dialogContainer.style.display = 'none';
})