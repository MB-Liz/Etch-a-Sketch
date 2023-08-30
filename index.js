const sketchpad = document.querySelector(".sketchpad-grid");
const cell = document.querySelectorAll(".cell");
const gridSize = document.querySelectorAll(".grid-size");
const black = "#000";
const white = "#fff";
//const context = sketchpad.getContext("2d");

function buildGrid(numGrid){
    sketchpad.style.setProperty('--grid-rows', numGrid);
    sketchpad.style.setProperty('--grid-cols', numGrid);
    for (let x = 1; x <= numGrid; x++){
        for(let y = 1; y <= numGrid; y++){
            let cell = document.createElement("div");
            cell.style.background = white;
            sketchpad.appendChild(cell).className = "cell";
            cell.addEventListener('mouseover',(e) => colorCell(cell));
        }
    }
}

function DestroyGrid(){
    sketchpad.innerHTML="";  //destroy all children
    console.log(cell.length); 
}

function colorCell(cell){
    console.log('success');
    cell.style.backgroundColor = black; 
}


console.log(cell);
cell.forEach((item) => {
    console.log(item);
    i.addEventListener('click',(e) => colorCell(i));
    console.log('time');
});


// Select grid size
gridSize.forEach((size) => {
    size.addEventListener("click", (e) =>{
        console.log(size);
        DestroyGrid();
        buildGrid(size.textContent);
    });
    
});



// Erase

buildGrid(18, sketchpad);