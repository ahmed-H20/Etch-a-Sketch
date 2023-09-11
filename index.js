const container = document.querySelector('.container');

for (let column = 0; column < 16; column++) {
    for (let raw = 0; raw < 16; raw++) {
    const div = document.createElement('div');
    div.className = 'cell';
    container.appendChild(div);
    }
}

function changeBackground(){
    this.style.backgroundColor = 'black';
}

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener("mouseover", changeBackground));

