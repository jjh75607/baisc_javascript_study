var imgCoor = 0;
var rockPaperScissors = {
    바위: '0',
    가위: '-142px',
    보: '-284px'
};

function computerChoice(imgCoor) {
    return Object.entries(rockPaperScissors).find((y) => {
        return y[1] === imgCoor;
    })[0];
};

var interval;
function intervalMaker() {
    interval = setInterval(() => {
        if (imgCoor === rockPaperScissors.바위) {
            imgCoor = rockPaperScissors.가위;
        } else if (imgCoor === rockPaperScissors.가위) {
            imgCoor = rockPaperScissors.보;
        } else {
            imgCoor = rockPaperScissors.바위;
        }

        document.querySelector('#computer').style.background =
            'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + imgCoor + ' 0';
    }, 100);
}

intervalMaker();

var scoreBoard = {
    가위: 1,
    바위: 0,
    보: -1
};

document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        clearInterval(interval);

        setTimeout(() => {
            intervalMaker();
        }, 1000);

        var myChoice = btn.textContent;
        var score = scoreBoard[myChoice] - scoreBoard[computerChoice(imgCoor)];

        if (score === 0) {
            console.log('a draw');
        } else if ([-1, 2].includes(score)) {
            console.log('victory');
        } else {
            console.log('defeat');
        }
    });
});