const sketchpad = document.querySelector(".sketchpad-grid");
const cell = document.querySelectorAll(".cell");
//const context = sketchpad.getContext("2d");

function buildGrid(numGrid, sketchpad){
    sketchpad.style.setProperty('--grid-rows', numGrid);
    sketchpad.style.setProperty('--grid-cols', numGrid);
    for (let x = 1; x <= numGrid; x++){
        for(let y = 1; y <= numGrid; y++){
            let cell = document.createElement("div");
            
            sketchpad.appendChild(cell).className = "cell";
        }
    }
}

function colorCell(cell){
    document.getElementsByClassName('cell')[cell].style.background = '#000'; 
    console.log("success");
}

buildGrid(15, sketchpad);

cell.forEach(function (i){
    i.addEventListener('mouseover', (event) => colorCell(i))
});