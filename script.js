'use strict';

function createGrid(){
    const container = document.getElementById("grid-container");
    for(let i = 0; i < 16; i++){
        const box = document.createElement("div");
        box.setAttribute("class", "box");
        container.appendChild(box);
        for(let i = 0; i < 16; i++){
            const grid = document.createElement("div");
            grid.setAttribute("class", "grid");
            box.appendChild(grid);
        }
    }
}

createGrid();