
console.log("hi");
let move = new Audio('turn.mp3');
let draw = new Audio('lose.mp3');
let click = new Audio('click.mp3');
let winsound = new Audio("win.mp3");
let count = 0;
let turn = "X";
let box = document.getElementsByClassName("textbox");
let infotext = document.getElementById("infotext");
let announce = document.getElementById("announcement");

function turnChange() {
    if (turn === "X") {
        turn = "O";
        infotext.innerHTML = "Turn for O";
    } else {
        turn = "X";
        infotext.innerHTML = "Turn for X";
    }
}

function win() {
    announce.innerHTML = "-- WINNER --";
    infotext.innerHTML = turn + " won";
    document.getElementById("image").style.width = "30vw";
    winsound.play();
}

function checkwin() {
    if ((box[0].innerHTML == box[1].innerHTML) && (box[1].innerHTML == box[2].innerHTML) && (box[0].innerHTML != " ")) {
        win();
        return 1;
    } else if ((box[0].innerHTML == box[4].innerHTML) && (box[4].innerHTML == box[8].innerHTML) && (box[0].innerHTML != " ")) {
        win();
        return 1;
    } else if ((box[0].innerHTML == box[3].innerHTML) && (box[6].innerHTML == box[3].innerHTML) && (box[0].innerHTML != " ")) {
        win();
        return 1;
    } else if ((box[4].innerHTML == box[3].innerHTML) && (box[4].innerHTML == box[5].innerHTML) && (box[4].innerHTML != " ")) {
        win();
        return 1;
    } else if ((box[4].innerHTML == box[1].innerHTML) && (box[4].innerHTML == box[7].innerHTML) && (box[4].innerHTML != " ")) {
        win();
        return 1;
    } else if ((box[2].innerHTML == box[5].innerHTML) && (box[5].innerHTML == box[8].innerHTML) && (box[2].innerHTML != " ")) {
        win();
        return 1;
    } else if ((box[2].innerHTML == box[4].innerHTML) && (box[4].innerHTML == box[6].innerHTML) && (box[4].innerHTML != " ")) {
        win();
        return 1;
    } else if ((box[6].innerHTML == box[7].innerHTML) && (box[8].innerHTML == box[7].innerHTML) && (box[6].innerHTML != " ")) {
        win();
        return 1;
    }
}


let gameover = 0;
Array.from(box).forEach((b) => {
    b.addEventListener("click", () => {
        if (gameover == 0) {
            if (b.innerHTML == " ") {
                b.innerHTML = turn;
                let w = checkwin();
                if (w == "1") {
                    gameover = 1;
                    return;
                }
                count++;
                if (count == 9) {
                    announce.innerHTML = "-- GAME OVER --";
                    draw.play();
                }
                turnChange();
                move.play();
            }
        }
    });
});
let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    setTimeout(r(), 10000);
    click.play();
});
async function r() {
    await click.play;
    location.reload();
}

