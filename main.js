function createGrid(size){
    const board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows =`repeat(${size}, 1fr)`;
    
    const numberOfDivs = size * size;

    for(let i =0; i< numberOfDivs;i++){
        let div = document.createElement("div");
        div.style.border ="1px solid black";
        board.insertAdjacentElement("beforeend",div);
    }
}

document.addEventListener("DOMContentLoaded", createGrid(16))

