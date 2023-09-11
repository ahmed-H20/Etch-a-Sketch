const container = document.querySelector('.container');

//x => number of cells
let x = 0;
do{
    x = prompt("Enter number of cells (should be < 100):")
}while(x > 100);


function makeGrid(){    
    for (let column = 0; column < x; column++) {
        for (let raw = 0; raw < x; raw++) {
        const div = document.createElement('div');
        div.className = 'cell';
        container.appendChild(div);
        }
    }
}

function changeBackground(){
    this.style.backgroundColor = 'black';
}

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener("mouseover", changeBackground));

