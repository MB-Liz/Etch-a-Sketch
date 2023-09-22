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
            cell.style.opacity = 1;
            sketchpad.appendChild(cell).className = "cell";
            cell.addEventListener('mouseover',(e) => colorCell(cell));
        }
    }
}



function colorCell(cell){
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
             if(cell.style.opacity == 0.1){
                currentColor = black;
                cell.style.opacity = 0.99;
                cell.style.backgroundColor = currentColor;
            }else if(cell.style.opacity != 0.99){
                currentColor = white;
                cell.style.backgroundColor = white;
                cell.style.opacity = cell.style.opacity - 0.1;
            }
            break;
        case 'black':
            currentColor = black;
            cell.style.backgroundColor = currentColor;
            break;
        default:
            currentColor = black;
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

//Destroy grid
function DestroyGrid(){
    sketchpad.innerHTML="";  //destroy all children
}

// Erase
function eraseGrid(){
    DestroyGrid();
    buildGrid(gridSize);
}


buildGrid(gridSize);