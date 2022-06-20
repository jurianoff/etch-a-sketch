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

function clear () {
    for (let i = 1; i <= gridSize*gridSize; i++) {
        oldSquares = document.querySelector('.square');
        grid.removeChild(oldSquares);
}};

const size = document.querySelector('.size');
size.addEventListener('click', () => {
    clear();

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
        
        square.addEventListener('mouseover', () => {
        square.classList.add('hover');
        })
        };
    let squaresToStyle = document.getElementsByClassName('square');
    for (let i = 0; i < squaresToStyle.length; i++) {
        squaresToStyle[i].style.flexBasis = `${720/gridSize}px`;
    }
});

const blackMode = document.querySelector('.black');
blackMode.addEventListener('click', () => {
    clear();
    for (let i = 1; i <= gridSize*gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
        square.addEventListener('mouseover', () => {
        square.classList.add('blackMode');
        })}
    let squaresToStyle = document.getElementsByClassName('square');
    for (let i = 0; i < squaresToStyle.length; i++) {
        squaresToStyle[i].style.flexBasis = `${720/gridSize}px`;
    };
    });

const rainbowMode = document.querySelector('.rainbow');
rainbowMode.addEventListener('click', () => {
    clear();
    for (let i = 1; i <= gridSize*gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
        let h = Math.floor((Math.random() * 360) + 1);
        let s = 100;
        let l = 50;
        square.addEventListener('mouseover', () => {
        square.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
        })}
    let squaresToStyle = document.getElementsByClassName('square');
    for (let i = 0; i < squaresToStyle.length; i++) {
        squaresToStyle[i].style.flexBasis = `${720/gridSize}px`;
    };
});