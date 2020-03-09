var computer = 0;
var rockPaperScissors = {
    바위: '0',
    가위: '-142px',
    보: '-284px'
};

setInterval(() => {
    if (computer === rockPaperScissors.바위) {
        computer = rockPaperScissors.가위;
    } else if (computer === rockPaperScissors.가위) {
        computer = rockPaperScissors.보;
    } else {
        computer = rockPaperScissors.바위;
    }

    document.querySelector('#computer').style.background =
        'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + computer + ' 0';
}, 100);


document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        console.log(btn.textContent);
    });
});