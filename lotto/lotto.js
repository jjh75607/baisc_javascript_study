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

setTimeout(function () {
    var ball = document.createElement('div');

    ball.textContent = success[0];
    result.appendChild(ball);
}, 1000);

setTimeout(function () {
    var ball = document.createElement('div');

    ball.textContent = success[1];
    result.appendChild(ball);
}, 2000);


setTimeout(function () {
    var ball = document.createElement('div');

    ball.textContent = success[2];
    result.appendChild(ball);
}, 3000);

setTimeout(function () {
    var ball = document.createElement('div');

    ball.textContent = success[3];
    result.appendChild(ball);
}, 4000);

setTimeout(function () {
    var ball = document.createElement('div');

    ball.textContent = success[4];
    result.appendChild(ball);
}, 5000);

setTimeout(function () {
    var ball = document.createElement('div');

    ball.textContent = success[5];
    result.appendChild(ball);
}, 6000);

setTimeout(function () {
    var bounsPage = document.querySelector('#bouns');
    bounsPage.textContent = '보너스 : ' + bouns;
}, 7000);
