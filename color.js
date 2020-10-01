var track = 6;
var colors = [];
var randomcolor;
var cls = document.querySelectorAll(".square");
var colordisplay = document.querySelector("h1");
var mssg = document.querySelector("#message");
var div = document.querySelector("#cc");
var button = document.querySelector("button");
var mode = document.querySelectorAll(".mode");

colordisplay.textContent = randomcolor;
 
init();
function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

// adding reset event to reset the game again
button.addEventListener("click", function () {
    reset();
});

// function to work different modes in game 
function setupModeButtons() {
    for (var i = 0; i < mode.length; i++) {
        mode[i].addEventListener("click", function () {
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? track = 3 : track = 6;
            reset();
        });
    }
}

// function to set up squares and their random colors 
function setupSquares(){
    for (var i = 0; i < cls.length; i++) {
        // cls[i].style.backgroundColor = colors[i];

        cls[i].addEventListener("click", function () {
            var clickedcolor = this.style.backgroundColor;
            if (clickedcolor === randomcolor) {
                mssg.textContent = "Correct!";
                changeallcolors();
                div.style.backgroundColor = randomcolor;
                button.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "rgb(35, 35, 35)";
                mssg.textContent = "Try again!!";
            }
        });
    }
}

// function to reset the game
function reset(){
    // again we need to pick random colors
    colors = generateRandomColors(track);
    // again we need to pick random index from array
    randomcolor = random();
    // changing the display
    colordisplay.textContent = randomcolor;
    mssg.textContent = "";
    // we need to change all colors
    for (var i = 0; i < cls.length; i++) {
        if(colors[i]){
            cls[i].style.display = "block";
            cls[i].style.backgroundColor = colors[i];
        }else{
            cls[i].style.display = "none";
        }
    }
    div.style.backgroundColor = "#4682b4";
    button.textContent = "New Colors";
}

// after choosing the correct color change all colors to the correct color
function changeallcolors(){
    for(var i = 0; i < cls.length; i++){
        cls[i].style.backgroundColor = randomcolor;
    }
}

// generating random index from given array
function random() {
    var randomindex = Math.floor(Math.random() * colors.length);
    return colors[randomindex];
}

// generating random colors and creating an array
function generateRandomColors(num){
    // creating empty array
    var arr = [];
    // repeat num times
    for(var i = 0; i < num; i++){
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        // "rgb(r, g, b)"
        var rgb = "rgb(" + r + ", " + g + ", " + b + ")"
        arr.push(rgb);
    }
    return arr;
}
