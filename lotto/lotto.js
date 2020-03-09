var shuffle = [];
var numberList = Array(45).fill().map(function (e, i) {
    return i + 1;
});

while (numberList.length > 0) {
    var temp = numberList.splice(Math.floor(Math.random() * numberList.length), 1)[0];
    shuffle.push(temp);
}

var bouns = shuffle[shuffle.length - 1];
var success = shuffle.slice(0, 6).sort(function (p, c) {
    return p - c;
});
var result = document.querySelector('#result_page');

function ballPaint(n, result) {
    var ball = document.createElement('div');

    ball.style.display = 'inline-block';
    ball.style.border = '1px solid black';
    ball.style.borderRadius = '10px';
    ball.style.width = '20px';
    ball.style.height = '20px';
    ball.style.textAlign = 'center';
    ball.style.marginRight = '10px';
    ball.textContent = n;

    var background;
    if (n <= 10) {
        background = 'red';
    } else if (n <= 20) {
        background = 'orange';
    } else if (n <= 30) {
        background = 'yellow';
    } else if (n <= 40) {
        background = 'blue';
    } else {
        background = 'green';
    }

    ball.style.background = background;

    result.appendChild(ball);
}

setTimeout(function () {
    ballPaint(success[0], result);
}, 1000);

setTimeout(function () {
    ballPaint(success[1], result);
}, 2000);

setTimeout(function () {
    ballPaint(success[2], result);
}, 3000);

setTimeout(function () {
    ballPaint(success[3], result);
}, 4000);

setTimeout(function () {
    ballPaint(success[4], result);
}, 5000);

setTimeout(function () {
    ballPaint(success[5], result);
}, 6000);

setTimeout(function () {
    var bounsPage = document.querySelector('#bouns');
    ballPaint(bouns, bounsPage);
}, 7000);
