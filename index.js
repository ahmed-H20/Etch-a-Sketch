const container = document.querySelector('.container');
let cells;

// run the function one time only
let done = false;
if(!done){
    done = true;
    makeGrid();
}
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function makeGrid(x = 16){    
    for (let column = 0; column < x; column++) {
        for (let raw = 0; raw < x; raw++) {
        const div = document.createElement('div');
        div.className = 'cell';        
        div.style.width = `${960/x}px`;
        div.style.height = `${960/x}px`;
        div.addEventListener('mousedown', changeBackground);
        div.addEventListener('mouseover', changeBackground);
        container.appendChild(div);        
        }
    }
    cells = Array.from(document.querySelectorAll('.cell'));
    //cells.forEach(cell => cell.addEventListener('mousedown', changeBackground))
    //cells.forEach(cell => cell.addEventListener('mouseover', changeBackground))
    
}
    

function newGrid() {
    //x => number of cells
    let x = 0;        
    do{
        x = prompt("Enter number of cells (should be < 100):");
    }while((x > 100) || (x <= 0));
    removeGrid();
    makeGrid(x);
}

function removeGrid(){        
    cells.forEach(cell => cell.remove());           
}


function changeBackground(e){
    if (e.type === 'mouseover' && !mouseDown) return;
    this.style.backgroundColor = 'black';
}



