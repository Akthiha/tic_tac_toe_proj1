const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

function handleSquareClick(event) {
  const square = event.target;
  square.textContent = currentPlayer;
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

squares.forEach((square) => {
  square.addEventListener('click', handleSquareClick);
});
