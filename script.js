'use strict';

function createGrid(){
    const container = document.getElementById("grid-container");
    for(let i = 0; i < 16; i++){
        const box = document.createElement("div");
        box.setAttribute("class", "box");
        container.appendChild(box);
        for(let i = 0; i < 16; i++){
            const size = 430/16;
            const grid = document.createElement("div");
            grid.setAttribute("class", "grid");
            grid.setAttribute("style", `width: ${size}px; height: ${size}px`);
            box.appendChild(grid);
        }
    }
}

createGrid();

const grids = document.getElementsByClassName("grid");
const container = document.getElementById("grid-container");
let isDrawing = false;

container.addEventListener("mousedown", () => {
    isDrawing = true;
    draw();      
});
window.addEventListener("mouseup", () => {
    isDrawing = false;
});
    

function draw(){
    for (const grid of grids){
        grid.addEventListener("mousemove", () => {
            if (isDrawing){
                grid.style.backgroundColor = "red";
            }
        })
    }   
}

