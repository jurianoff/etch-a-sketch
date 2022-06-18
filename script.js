const grid = document.querySelector(".grid");
let gridSize = 16;
for (let i = 1; i <= gridSize*gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
    square.addEventListener('mouseover', () => {
    square.classList.add('hover');
    })
};

const size = document.querySelector('.size');
size.addEventListener('click', () => {
    for (let i = 1; i <= gridSize*gridSize; i++) {
        oldSquares = document.querySelector('.square');
        grid.removeChild(oldSquares);
    }

    while(true) {
        gridSize = prompt("Set grid size. Max:100");
        if (gridSize === null) {
            break;
        }else if (!isNaN(gridSize) && gridSize <= 100 && gridSize >= 1) {
            break;
        };
        parseInt(gridSize);
        };

    for (let i = 1; i <= gridSize*gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
        let squaresToStyle = document.getElementsByClassName('square');
        for (let i = 0; i < squaresToStyle.length; i++) {
            squaresToStyle[i].style.flexBasis = `${720/gridSize}px`;
        }
        console.log(squaresToStyle);
        square.addEventListener('mouseover', () => {
        square.classList.add('hover');
        })
        };
});