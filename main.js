//default pen colour
let colour = "black"

document.addEventListener("DOMContentLoaded", function(){
    createGrid(16);
    
    document.querySelector("#popup-btn").addEventListener(this.onclick,function(){
        let size = askSize();
        createGrid(size);
    })
})
//hover

function createGrid(size){
    const board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows =`repeat(${size}, 1fr)`;
    
    const numberOfDivs = size * size;

    for(let i =0; i< numberOfDivs;i++){
        let div = document.createElement("div");
        //hover listeners
        div.addEventListener("mouseover", colourDiv)
        board.insertAdjacentElement("beforeend",div);
    }
}

function askSize(){
    let choice = prompt("Gimme the grid size");
    let msg = document.querySelector("#msg");

    if (choice == "") {
        msg.innerHTML ="Please give me a number :(";
    }
    else if (choice <= 0 || choice > 100) {
        msg.innerHTML = "Woah Buddy! Only numbers between 1 and 100"
    }
    else {
        msg.innerHTML = "Draw away :)";
        return choice;
    }
}

//set pen colour
function setColour(colourChoice){
    colour = colourChoice;
}

function colourDiv(){
    if(colour == 'random'){
        this.style.backgroundColor = `hsl(${Math.random()* 360}, 100%, 50%)`
    }
    else{
        this.style.backgroundColor = colour;
    }
}