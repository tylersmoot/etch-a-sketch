

const container = document.querySelector("#container");

const grid = document.createElement("div");



createCells();

grid.classList.add("gridLayer");




function createCells () {
    for(let i = 0; i < 256; i++) {
        
        cells = document.createElement("div");
        grid.appendChild(cells);
        cells.classList.add("cells");
        console.log(cells); 
        
    }
}


container.appendChild(grid);







