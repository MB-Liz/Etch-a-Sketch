const sketchpad = document.querySelector(".sketchpad-grid");
const cell = document.querySelectorAll(".cell");
const gridSizeButton = document.querySelectorAll(".grid-size-button");
const eraseButton = document.querySelector(".erase-button");
const colorButton =document.querySelector(".color-button");
const rainbowButton =document.querySelector(".rainbow-button");
const tintButton =document.querySelector(".tint-button");
const colorPicker = document.querySelector("#colorPicker");
const black = "#000";
const white = "#fff";
let defaultGridSize = 25;
let gridSize = defaultGridSize;
let currentColor = black;
let pen = 'black';

//add toggle grid border
// tint stopped working
// white and black stopped working




eraseButton.addEventListener("click", eraseGrid);
rainbowButton.addEventListener("click", () => pen = 'rainbow');
tintButton.addEventListener("click", () => pen = 'tint');
colorButton.addEventListener("click", colorEvent);

function colorEvent(){
    pen = 'color';
    colorPicker.addEventListener('input', () => {
        currentColor = colorPicker.value;
     })
}


function buildGrid(gridSize){
    sketchpad.style.setProperty('--grid-rows', gridSize);
    sketchpad.style.setProperty('--grid-cols', gridSize);
    for (let x = 1; x <= gridSize; x++){
        for(let y = 1; y <= gridSize; y++){
            let cell = document.createElement("div");
            cell.style.backgroundColor = white;
            console.log ("cell" + x + y);
            cell.style.opacity = 1;
            sketchpad.appendChild(cell).className = "cell";
            cell.addEventListener('mouseover',(e) => colorCell(cell));
        }
    }
}

function DestroyGrid(){
    sketchpad.innerHTML="";  //destroy all children
}

function colorCell(cell){
    let cellColor = rgbToHex(cell.style.backgroundColor);
    cellColor = cellColor.toString();
    cellColor = cellColor.toUpperCase();
    switch (pen){
        case 'color':
            cell.style.opacity = 1;
             cell.style.backgroundColor = currentColor;
            break;
        case 'rainbow':
            cell.style.opacity = 1;
            let vintageColors = ["#A9EEC2", "#FAD284", "#F38181", "#705772",
                                "#705772", "#445069", "#252B48", "#CD1818",
                                "#116D6E", "#FF8551", "#A2CDB0"];
            currentColor = vintageColors[Math.floor(Math.random() * vintageColors.length)];
            cell.style.backgroundColor = currentColor;
            break;
        case 'tint':
            console.log(cell.style.opacity + " opacity");
             if(cell.style.opacity == 0.1){
                console.log("finale");
                currentColor = black;
                cell.style.opacity = 0.99;
                cell.style.backgroundColor = currentColor;
            }else if(cell.style.opacity != 0.99){
                console.log("process");
                currentColor = white;
                cell.style.backgroundColor = white;
                let oldV = cell.style.opacity;
                cell.style.opacity = cell.style.opacity - 0.1;
                let newV = cell.style.opacity;
                console.log(oldV + "process" + newV + white);
            }
            break;
        case 'black':
            currentColor = black;
            console.log("black");
            cell.style.backgroundColor = currentColor;
            break;
        default:
            currentColor = white;
            cell.style.backgroundColor = currentColor;

            currentColor = "#000";
            cell.style.backgroundColor = currentColor;
            break;

    }
}

console.log(componentToHex(255));
// Turn rgb values to hex values

function componentToHex(c){
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(rgb){
    let rgbValues = rgb.substring(4, rgb.length-1);
    rgbValues = rgbValues.trim();
    const rgbArray = rgbValues.split(",");
    let r = rgbArray[0], g = rgbArray[1], b = rgbArray[2];
    return "#" + componentToHex(Number(r)) + componentToHex(Number(g)) + componentToHex(Number(b));
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

buildGrid(gridSize);
/*

let tintColors = ["#E6E6E6",  "#C9C9C9", "#AEAEAE", "#939393",
                             "#7A7A7A", "#616161", "#494949", "#333333",
                             "#1E1E1E", "#040404"];

for(let i = 0; i < tintColors.length; i++){
                 if (cellColor == tintColors[i]){
                    currentColor = tintColors[i+1];
                    cell.style.backgroundColor = currentColor;
                 }
                 else if(cellColor == tintColors[tintColors.length]){
                    currentColor = tintColors[tintColors.length];
                    cell.style.backgroundColor = currentColor;
                 }
                 else{
                    currentColor = tintColors[0];
                    cell.style.backgroundColor = currentColor;
                 }
            }*/


// bugs - after tint = black, cell color didnt change