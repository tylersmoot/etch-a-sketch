let header = document.querySelector("#header");

let title = document.createElement("h1");

let clearBtn = document.getElementById("clear");



clearBtn.addEventListener("click", () => {


     all = document.querySelectorAll(".cells");
     all.forEach(item => {
         item.style.background = "white";
     })

   let input = prompt("how many squares per side would you like?");
   

console.log(input);
    

})












title.textContent = "Etch-A-Sketch";

   title.classList.add("title");

       header.appendChild(title);







const container = document.querySelector("#container");

const grid = document.createElement("div");


createCells();

   grid.classList.add("gridLayer");







// function newCells() {

//    for(let i = 0; i < input; i++) {
        
//     cells = document.createElement("div");

//       cells.classList.add("cells");

//         grid.appendChild(cells);
    
// }  
// }
















// this function creates 256 individual div cells inside the grid and appends inside the grid element

function createCells () {

    for(let i = 0; i < 256; i++) {
        
        cells = document.createElement("div");

          cells.classList.add("cells");

            grid.appendChild(cells);
        
    }   
}

container.appendChild(grid);




// a function to render each cells background red when mouseover

let all = document.querySelectorAll(".cells");

  all.forEach(item => {

     item.addEventListener("mouseover", event => {

        item.style.background = "red";
    });
});

