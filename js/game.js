let board = [];

for (let i = 0; i < 9; i++) { board[i] = "mt" }
let end = false;
let turn = "x";
console.log(board);

let win = [[board[0], board[1], board[2]],
[board[3], board[4], board[5]],
[board[6], board[7], board[8]],
[board[0], board[3], board[6]],
[board[1], board[4], board[7]],
[board[2], board[5], board[8]],
[board[0], board[4], board[8]],
[board[2], board[4], board[6]]];
console.log(win);

for (let j = 0; j < 9; j++) {

    document.getElementById(j.toString()).addEventListener("click", (event) => {
        if (board[j] == "mt") {
            console.log(board[j]);
            document.getElementById(j.toString()).src = "./images/" + turn + ".png";

            board[j] = turn;

            win = [[board[0], board[1], board[2]],
            [board[3], board[4], board[5]],
            [board[6], board[7], board[8]],
            [board[0], board[3], board[6]],
            [board[1], board[4], board[7]],
            [board[2], board[5], board[8]],
            [board[0], board[4], board[8]],
            [board[2], board[4], board[6]]];
            
            console.log("Всички полета" + win);
            
            for (let k = 0; k < win.length; k++) {
                
                console.log("Тройка полета" + win[k].toString());
                
                if (win[k].toString() == "x,x,x") {
                    document.body.innerHTML+="<h1>X печели!</h1>";
                }
                if (win[k].toString() == "o,o,o") {
                    document.body.innerHTML+="<h1>O печели!</h1>";
                }
            }
            if (turn == "x") {
                turn = "o";
            }
            else if (turn == "o") {
                turn = "x";
            }
        }
    });
}