const cells = document.querySelectorAll('.cell');  
const message = document.getElementById('message');
const resetBtn = document.getElementById('reset');
let currentPlayer = 'X'; // Keeping track of each turn
let gameEnd = false; // To indicate if game ends or not
let moves = 0; // Keep track of number of moves
let board = ['','','','','','','','','']; // State of the game board


const checkWinner = () => {

  // Define winning Method
  const winCombinations = [
    [0,1,2], [3,4,5], [6,7,8], //row
    [0,3,6], [1,4,7], [2,5,8], //column
     [0,4,8], [2,4,6] //diagonal
  ];

  for (let i = 0; i < winCombinations.length; i++) {
    const [a, b, c] = winCombinations[i]; 
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {    // if condition for indexes a, b, and c are the same and not empty
      gameEnd = true;
      message.textContent = `${currentPlayer} won the game!`;
      break;
    }
  }
  // Define tie
  if (!board.includes('') && !gameEnd) {
    gameEnd = true;
    message.textContent = `It's a tie!`;
  }

}

// Define Cell Click
const handleCellClick = (e) => { // take e as an event object
  const cell = e.target;
  const cellIndex = cell.id;
  if (board[cellIndex] !== '' || gameEnd) return; //check all cells occupied or game ends => return nothing
  board[cellIndex] = currentPlayer; //updates the game board array with the current player's mark
  cell.textContent = currentPlayer; //updates the cell's text content with the current player's mark
  cell.classList.add(currentPlayer.toLowerCase()); //adding CSS colours
  moves++; 
  checkWinner();
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';  //switches the current player to the other player ('X' becomes 'O' or vice versa) for the next turn
}


// Define Reset Button
const handleReset = () => {
  board = ['','','','','','','','','']; //reset the game board to new array
  currentPlayer = 'X';
  gameEnd = false; //indicate game is not over yet
  moves = 0; // reset back moves
  message.textContent = ''; // reset back text
  cells.forEach(cell => { // reset back each cell
    cell.textContent = '';
    cell.classList.remove('x', 'o');
  });
}

cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});

resetBtn.addEventListener('click', handleReset);



