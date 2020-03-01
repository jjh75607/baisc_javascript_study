var word = "시작";

while(true) {
    var answer = prompt(word);

    if(answer === "끝") {
        break;
    }

    if(answer.length === 1) {
        alert("1글자 이상 입력");
        continue;
    }

    if(word[word.length - 1] === answer[0]) {
        word = answer;
        alert("정답");
    } else {
        alert("오답");
    }
}