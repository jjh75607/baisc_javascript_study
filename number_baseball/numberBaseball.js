var body = document.body;
var resultText = document.createElement('h1');
body.append(resultText);

var form = document.createElement('form');
body.append(form);

var answer = document.createElement('input');
answer.maxLength = 4;
form.append(answer);

var button = document.createElement('button');
button.textContent = '입력';
form.append(button)

var numberList;
var randomNumList;
var count = 0;

function getNumber() {
    numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    randomNumList = [];

    for (var i = 0; i < 4; i++) {
        var n = numberList.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        randomNumList.push(n);
    }
}

getNumber();
answer.focus();

form.addEventListener('submit', function (e) {
    e.preventDefault();

    var result = answer.value;
    resultText.textContent = '';
    console.log(result);

    count++;
    if (count > 10) {
        resultText.textContent = "횟수초과 : " + randomNumList.join('');
        answer.value = '';
        count = 0;
        getNumber();
    } else {
        if (result === randomNumList.join('')) {
            resultText.textContent = "홈런";
            answer.value = '';
            answer.focus();
            count = 0;
            getNumber();
        } else {
            answer.value = '';
            var resultArray = result.split('');
            var strike = 0;
            var ball = 0;

            for (var i = 0; i < 4; i++) {
                if (Number(resultArray[i]) === randomNumList[i]) {
                    strike++;
                } else if (randomNumList.indexOf(Number(resultArray[i])) > -1) {
                    ball++;
                }
            }

            resultText.textContent = ball + ' : ball, ' + strike + ' : strike';
        }
    }
});