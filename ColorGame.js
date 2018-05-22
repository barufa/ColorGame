var squares = document.querySelectorAll(".square");
var colorgoal = "rgb(0, 0, 0)";
var colordisplay = document.querySelector("#color");
var message = document.querySelector("#message");
var title = document.querySelector("h1");
var dificult = 6;
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

document.querySelector("#newgame").addEventListener("click", newgame);
easy.addEventListener("click", easybutton);
hard.addEventListener("click", hardbutton);

stargame();

function easybutton() {
    var l = squares.length;
    dificult = 3;
    for (var i = 3; i < l; i++)
        squares[i].style.display = "none";
    hard.style.backgroundColor = "white";
    hard.style.color = "steelblue";
    easy.style.backgroundColor = "steelblue";
    easy.style.color = "white";
    newgame();
}

function hardbutton() {
    var l = squares.length;
    dificult = 6;
    for (var i = 3; i < l; i++)
        squares[i].style.display = "block";
    easy.style.backgroundColor = "white";
    easy.style.color = "steelblue";
    hard.style.backgroundColor = "steelblue";
    hard.style.color = "white";
    newgame();
}

function newgame() {
    message.textContent = "";
    title.style.backgroundColor = "steelblue";
    var rand = (function(x) {
        return Math.floor(Math.random() * x);
    });
    var rgb = (function(r, g, b) {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    });
    var l = squares.length;
    for (var i = 0; i < l; i++)
        squares[i].style.backgroundColor = rgb(rand(256), rand(256), rand(256));
    colorgoal = squares[rand(dificult)].style.backgroundColor;
    colordisplay.textContent = colorgoal;
}

function stargame() {
    var l = squares.length;
    for (let i = 0; i < l; i++) {
        iswin = function() {
            if (squares[i].style.backgroundColor == colorgoal) {
                for (var j = 0; j < l; j++)
                    squares[j].style.backgroundColor = colorgoal;
                message.style.color = "green";
                message.textContent = "Correct!";
                title.style.backgroundColor = colorgoal;
            } else {
                squares[i].style.backgroundColor = "rgb(0, 0, 0)";
                message.style.color = "red";
                message.textContent = "Try again";
            }
        };
        squares[i].addEventListener("click", iswin);
    }
    hardbutton();
}
