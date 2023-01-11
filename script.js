const SIZE_DEFAULT = 16
const COLOR_DEFAULT = 0

let size = SIZE_DEFAULT;
let color = COLOR_DEFAULT;
let mode = 'draw';

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function initializeGrid(size) {
  const grid = document.getElementById("grid");
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size ** 2; i++) {
      const square = document.createElement("div");
      square.classList.add('square');
      square.addEventListener('mousedown', changeColor);
      square.addEventListener('mouseover', changeColor);
      grid.appendChild(square);
  }
}

function changeColor(e) {
  if (mouseDown && e.type == 'mouseover') {
    if (mode == 'draw')
      e.target.style.backgroundColor = 'black';
    else
      e.target.style.backgroundColor = 'transparent';
  }
}

function toggleErase() {
  mode = mode == 'draw' ? 'erase' : 'draw';
}

eraseBtn = document.getElementById('erase');
eraseBtn.addEventListener("click", toggleErase);
clearBtn = document.getElementById('clear');
clearBtn.addEventListener("click", clear);

function clear() {
  console.log('clear');
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.style.backgroundColor = 'transparent');
}

initializeGrid(SIZE_DEFAULT);