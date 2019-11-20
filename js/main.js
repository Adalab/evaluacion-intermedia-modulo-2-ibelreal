//funcion para el numero random
const getRandomNumber = function (max) {
    return Math.ceil(Math.random() * max);
}
//obtengo el numero random natural de 1 a 100
const random = getRandomNumber(100);
console.log('El número random es: ' + random);

//constantes empleadas para el js
const btn = document.querySelector('.js-btn');
const numberUser = document.querySelector('.js-number');
const clue = document.querySelector('.js-clue');
const count = document.querySelector('.js-count');

const isMyNumber = function (num) {
    if (num == random) {
        clue.innerHTML = 'Has ganado campeona!!';
    }
    else {
        isBiggerThanMe(num);
    }
}

const isBiggerThanMe = function (num) {
    if (num > random) {
        clue.innerHTML = 'Demasiado alto';
    }
    else {
        clue.innerHTML = 'Demasiado bajo';
    }
}

const isACorrectNumber = function (num) {
    if (num > 0 && num <= 100) {
        isMyNumber(num);
    }
    else {
        clue.innerHTML = 'El número debe estar entre 1 y 100';
    }
}

const checkNumber = function () {
    const value = numberUser.value;
    isACorrectNumber(value);
}


btn.addEventListener('click', checkNumber);