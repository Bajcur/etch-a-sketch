'use strict';

function createGrid(n){
    const container = document.getElementById("grid-container");
    for(let i = 0; i < n; i++){
        const box = document.createElement("div");
        box.setAttribute("class", "box");
        container.appendChild(box);
        for(let i = 0; i < n; i++){
            const size = 430/n;
            const grid = document.createElement("div");
            grid.setAttribute("class", "grid");
            grid.setAttribute("style", `width: ${size}px; height: ${size}px`);
            box.appendChild(grid);
        }
    }
}

function userInput(){
    let n = prompt("Enter a number")
    if (n <= 64 ){
        createGrid(n);
    } else {
        alert("Enter smaller number")
        userInput();
    }
}

const button = document.getElementById("size");
button.addEventListener("click", () => userInput());
//createGrid();

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

