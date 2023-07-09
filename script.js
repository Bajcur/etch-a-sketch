'use strict';

let container = document.getElementById("grid-container");

function createGrid(n){
    let newContainer = document.createElement("div");
    newContainer.setAttribute("id", "grid-container");
    document.body.appendChild(newContainer);
    container = document.getElementById("grid-container");
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
    let n = prompt("Enter a number, but equal or smaller than 64.")
    if (n <= 64 ){
        container.remove();
        createGrid(n);
        toDraw();
    } else {
        alert("You've entered a number bigger than 64. Please enter smaller number.")
        userInput();
    }
}

const button = document.getElementById("size");
button.addEventListener("click", () => userInput());
//createGrid();

let isDrawing = false;
function toDraw(){
    container.addEventListener("mousedown", () => {
        isDrawing = true;
        draw();      
    });
    window.addEventListener("mouseup", () => {
        isDrawing = false;
    });
}

function draw(){
    const grids = document.getElementsByClassName("grid");
    for (const grid of grids){
        grid.addEventListener("mousemove", () => {
            if (isDrawing){
                grid.style.backgroundColor = "red";
            }
        })
    }   
}



