const sketchpad = document.querySelector(".sketchpad-grid");
//const context = sketchpad.getContext("2d");

function buildGrid(numGrid, sketchpad){
    sketchpad.style.setProperty('--grid-rows', numGrid);
    sketchpad.style.setProperty('--grid-cols', numGrid);
    for (let x = 1; x <= numGrid; x++){
        for(let y = 1; y <= numGrid; y++){
            let cell = document.createElement("div");
            cell.innerText = x;
            sketchpad.appendChild(cell).className = "grid-item";
        }
    }
}

buildGrid(8, sketchpad);