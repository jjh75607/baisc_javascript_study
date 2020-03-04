var n1 = Math.ceil(Math.random() * 9);
var n2 = Math.ceil(Math.random() * 9);
var result = n1 * n2;

var body = document.body;
var word = document.createElement('div');
word.textContent = `${n1} * ${n2}`;
body.append(word);

var form = document.createElement('form');
body.append(form);

var answer = document.createElement('input');
form.append(answer);
answer.focus();

var button = document.createElement('button');
button.textContent = '입력';
form.append(button);

var resultText = document.createElement('div');
body.append(resultText);

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if(result === Number(answer.value)) {
        resultText.textContent = "success";
        answer.value = '';
        answer.focus();

        n1 = Math.ceil(Math.random() * 9);
        n2 = Math.ceil(Math.random() * 9);
        result = n1 * n2;
        word.textContent = `${n1} * ${n2}`;
    } else {
        resultText.textContent = "error";
        answer.value = '';
        answer.focus();
    }
});