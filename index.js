const sketchpad = document.querySelector(".sketchpad-grid");
const cell = document.querySelectorAll(".cell");
const gridSizeButton = document.querySelectorAll(".grid-size-button");
const eraseButton = document.querySelector(".erase-button");
const black = "#000";
const white = "#fff";
let defaultGridSize = 18;
let gridSize = defaultGridSize;
let currentColor = black;
//const context = sketchpad.getContext("2d");

eraseButton.addEventListener("click", eraseGrid);

function buildGrid(gridSize){
    sketchpad.style.setProperty('--grid-rows', gridSize);
    sketchpad.style.setProperty('--grid-cols', gridSize);
    for (let x = 1; x <= gridSize; x++){
        for(let y = 1; y <= gridSize; y++){
            let cell = document.createElement("div");
            cell.style.background = white;
            sketchpad.appendChild(cell).className = "cell";
            cell.addEventListener('mouseover',(e) => colorCell(cell));
        }
    }
}

function DestroyGrid(){
    sketchpad.innerHTML="";  //destroy all children
}

function colorCell(cell){
    console.log('success');
    cell.style.backgroundColor = currentColor; 
}


console.log(cell);


// Select grid size
gridSizeButton.forEach((size) => {
    size.addEventListener("click", (e) =>{
        gridSize = size.textContent;
        DestroyGrid();
        buildGrid(gridSize);
    });
    
});



// Erase
function eraseGrid(){
    DestroyGrid();
    buildGrid(gridSize);
}


buildGrid(gridSize);