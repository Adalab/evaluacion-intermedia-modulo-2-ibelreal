const getRandomNumber = function (max) {
    return Math.ceil(Math.random() * max);
}

const random = getRandomNumber(100);
console.log('El número random es: ' + random);

