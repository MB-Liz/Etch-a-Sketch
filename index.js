const sketchpad = document.querySelector(".sketchpad-grid");
const cell = document.querySelectorAll(".cell");
const gridSizeButton = document.querySelectorAll(".grid-size-button");
const eraseButton = document.querySelector(".erase-button");
const rainbowButton =document.querySelector(".rainbow-button");
const tintButton =document.querySelector(".tint-button");
const black = "#000";
const white = "#fff";
let defaultGridSize = 25;
let gridSize = defaultGridSize;
let currentColor = black;
let pen = 'black';

//add toggle grid border

eraseButton.addEventListener("click", eraseGrid);
rainbowButton.addEventListener("click", rainbowGrid);
tintButton.addEventListener("click", tintGrid);




function buildGrid(gridSize){
    sketchpad.style.setProperty('--grid-rows', gridSize);
    sketchpad.style.setProperty('--grid-cols', gridSize);
    for (let x = 1; x <= gridSize; x++){
        for(let y = 1; y <= gridSize; y++){
            let cell = document.createElement("div");
            cell.style.backgroundColor = white;
            sketchpad.appendChild(cell).className = "cell";
            cell.addEventListener('mouseover',(e) => colorCell(cell));
        }
    }
}

function DestroyGrid(){
    sketchpad.innerHTML="";  //destroy all children
}

function colorCell(cell){
    switch (pen){
        case 'rainbow':
            let vintageColors = ["#A9EEC2", "#FAD284", "#F38181", "#705772",
                                "#705772", "#445069", "#252B48", "#CD1818",
                                "#116D6E", "#FF8551", "#A2CDB0"];
            currentColor = vintageColors[Math.floor(Math.random() * vintageColors.length)];
            cell.style.backgroundColor = currentColor;
            break;
        case 'tint':
            let tintColors = ["#E6E6E6",  "#C9C9C9", "#AEAEAE", "#939393",
                             "#7A7A7A", "#616161", "#494949", "#333333",
                             "#1E1E1E", "#040404"];
            for(let i = 0; i < tintColors.length; i++){
                 if (cell.style.backgroundColor == tintColors[i]){
                    currentColor = tintColors[i+1];
                 }
                 else if(cell.style.backgroundColor == tintColors[tintColors.length]){
                    currentColor = tintColors[tintColors.length];
                 }
                 else{
                    currentColor = tintColors[0];
                 }
            } 
            cell.style.backgroundColor = currentColor;
            break;
        case 'black':
            currentColor = black;
            cell.style.backgroundColor = currentColor;
            break;
        default:
            currentColor = white;
            cell.style.backgroundColor = currentColor;
            break;

    }
}
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

function rainbowGrid(){
    pen = 'rainbow';
}

function tintGrid(){
    pen = 'tint';
}
buildGrid(gridSize);