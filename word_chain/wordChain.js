var body = document.body;
var word = document.createElement('div');
word.textContent = '시작';
body.append(word);

var form = document.createElement('form');
body.append(form);

var answer = document.createElement('input');
form.append(answer);
answer.focus();

var button = document.createElement('button');
button.textContent = '입력';
form.append(button);

var result = document.createElement('div');
body.append(result);

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if(answer.value.length === 1) {
        result.textContent = "2자리이상";
        answer.value = '';
        answer.focus();
        
        return 0;
    }

    if(word.textContent[word.textContent.length - 1] === answer.value[0]) {
        result.textContent = 'success';
        word.textContent = answer.value;
        answer.value = '';
        answer.focus();
    } else {
        result.textContent = 'error';
        answer.value = '';
        answer.focus();
    }
});