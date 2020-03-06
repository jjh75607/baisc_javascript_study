var body = document.body;
var result = document.createElement('div');
var table = document.createElement('table');
var lines = [];
var cells = [];
var turn = 'x';


var call = function (e) {
    var line = lines.indexOf(e.target.parentNode);
    var cell = cells[line].indexOf(e.target);

    if (cells[line][cell].textContent === '') {
        cells[line][cell].textContent = turn;
        var check = false;
        //가로
        if (cells[line][0].textContent === turn &&
            cells[line][1].textContent === turn &&
            cells[line][2].textContent === turn) {
            var check = true;
        }

        //세로
        if (cells[0][cell].textContent === turn &&
            cells[1][cell].textContent === turn &&
            cells[2][cell].textContent === turn) {
            var check = true;
        }

        //대각
        if (line - cell === 0 || Math.abs(line - cell) === 2) {
            if (cells[0][0].textContent === turn &&
                cells[1][1].textContent === turn &&
                cells[2][2].textContent === turn) {
                check = true;
            }

            if (cells[0][2].textContent === turn &&
                cells[1][1].textContent === turn &&
                cells[2][0].textContent === turn) {
                check = true;
            }
        }

        if (check) {
            result.textContent = turn + "승리";

            turn = 'x';
            cells.forEach(function (line) {
                line.forEach(function (cell) {
                    cell.textContent = '';
                });
            });
        } else {
            if (turn === 'x') {
                turn = 'o';
            } else {
                turn = 'x';
            }
        }

    }
};

for (var i = 0; i < 3; i++) {
    var line = document.createElement('tr');
    lines.push(line);
    cells.push([]);

    for (var j = 0; j < 3; j++) {
        var cell = document.createElement('td');

        cell.addEventListener('click', call);
        cells[i].push(cell);
        line.appendChild(cell);
    }

    table.appendChild(line);
}
body.appendChild(table);
body.appendChild(result);