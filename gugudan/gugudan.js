while(true) {
    var n1 = Math.floor(Math.random() * 9) + 1;
    var n2 = Math.floor(Math.random() * 9) + 1;
    var result = n1 * n2;

    var answer = Number(prompt(`${n1} * ${n2}`));
    var isCheck = true;

    if(answer === 0) {
        break;
    }

    while(isCheck) {
        if(answer === result) {
            alert("O");
            isCheck = false;
        } else {
            alert("X");
        }
    }
}