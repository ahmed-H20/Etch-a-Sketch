const container = document.querySelector('.container');



function newGrid() {
    //x => number of cells
    let x = 0;
    do{
        x = prompt("Enter number of cells (should be < 100):");
    }while((x > 100) || (x <= 0));
    makeGrid(x);
}


function makeGrid(x = 16){    
    for (let column = 0; column < x; column++) {
        for (let raw = 0; raw < x; raw++) {
        const div = document.createElement('div');
        div.className = 'cell';        
        div.style.width = `${960/x}px`;
        div.style.height = `${960/x}px`;
        container.appendChild(div);        
        }
    }
    
}


function changeBackground(){
    this.style.backgroundColor = 'black';
}

makeGrid();
const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener("mouseover", changeBackground));

