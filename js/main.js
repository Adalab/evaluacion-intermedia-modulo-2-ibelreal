//constantes empleadas para el js
const btn = document.querySelector('.js-btn');
const numberUser = document.querySelector('.js-number');
const clue = document.querySelector('.js-clue');
const count = document.querySelector('.js-count');
let nClicks = 0;

//función para el numero random
const getRandomNumber = function (max) {
    return Math.ceil(Math.random() * max);
}

//obtengo el numero random natural de 1 a 100
const random = getRandomNumber(100);
console.log('El número random es: ' + random);

//función que escribe el string en pista 
function addString(phrase) {
    clue.innerHTML = phrase;
}

//función es el número usuario más grande que el número random
const isBiggerThanMe = function (num) {
    if (num > random) {

        addString('Demasiado alto');
        nClicks = nClicks + 1;
    }
    else {
        addString('Demasiado bajo');
        nClicks = nClicks + 1;
    }
}

//función es el número del usuario mi número random
const isMyNumber = function (num) {
    if (num == random) {
        addString('Has ganado campeona!!');
        nClicks = nClicks + 1;
    }
    else {
        isBiggerThanMe(num);
    }
}

//función es el número del usuario un número natural entre 1 y 100
const isACorrectNumber = function (num) {
    if (num > 0 && num <= 100) {
        isMyNumber(num);
    }
    else {
        addString('El número debe estar entre 1 y 100');
    }
}

//función que se ejecuta tras ser llamada por el evento
const checkNumber = function () {
    const value = parseInt(numberUser.value);
    isACorrectNumber(value);
    count.innerHTML = nClicks;
}


//evento
btn.addEventListener('click', AvoidDefault = (e) => {
    e.preventDefault();
    checkNumber();
});
