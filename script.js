const grid = document.querySelector(".grid");

for (let i = 1; i <= 16*16; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
    square.addEventListener('mouseover', () => {
    square.classList.add('hover');
    })
};