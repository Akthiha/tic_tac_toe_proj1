const cells = document.querySelectorAll('.cell'); 
const message = document.getElementById('message');
const resetBtn = document.getElementById('reset');
let currentPlayer = 'X';
let gameEnd = false;
let moves = 0;
let board = ['','','','','','','','',''];

const checkWinner = () => {
  const winCombinations = [
    [0,1,2], [3,4,5], [6,7,8], //row
    [0,3,6], [1,4,7], [2,5,8], //column
     [0,4,8], [2,4,6] //diagonal
  ];
  for (let i = 0; i < winCombinations.length; i++) {
    const [a, b, c] = winCombinations[i];
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      gameEnd = true;
      message.textContent = `${currentPlayer} won the game!`;
      break;
    }
  }
  if (!board.includes('') && !gameEnd) {
    gameEnd = true;
    message.textContent = `It's a tie!`;
  }
}

const handleCellClick = (e) => {
  const cell = e.target;
  const cellIndex = cell.id;
  if (board[cellIndex] !== '' || gameEnd) return;
  board[cellIndex] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add(currentPlayer.toLowerCase());
  moves++;
  checkWinner();
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

const handleReset = () => {
  board = ['','','','','','','','',''];
  currentPlayer = 'X';
  gameEnd = false;
  moves = 0;
  message.textContent = '';
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('x', 'o');
  });
}

cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});

resetBtn.addEventListener('click', handleReset);



//Gibberish
// headache starts >> 1. choose which button is click 2. onClick make box fly (select speed)
// function createFlyingSquare() {
//   const square = document.createElement('div');
//   square.classList.add('square');
//   square.style.top = Math.floor(Math.random() * (board.clientHeight - 100)) + 'px';
//   square.style.left = Math.floor(Math.random() * (board.clientWidth - 100)) + 'px';
//   board.appendChild(square);

//   const speed = gameMode === 'medium' ? 1 : 3;

//   const flyInterval = setInterval(() => {
//     const x = parseInt(square.style.left) + speed;
//     if (x > board.clientWidth) {
//       clearInterval(flyInterval);
//       board.removeChild(square);
//     } else {
//       square.style.left = x + 'px';
//     }
//   }, 10);

//   square.addEventListener('click', () => {
//     if (gameFinished) {
//       return;
//     }

//     board.removeChild(square);
//     square.removeEventListener('click', handleSquareClick);

//     if (square.textContent !== '') {
//       return;
//     }

//     square.textContent = currentPlayer;

//     const winner = checkForWinningCombination();

//     if (winner) {
//       alert(`${winner} wins!`);
//       gameFinished = true;
//     } else if ([...squares].every((square) => square.textContent !== '')) {
//       alert("It's a tie!");
//       gameFinished = true;
//     } else {
//       currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//     }
//   });
// }

// function startGame() {
//   squares.forEach((square) => {
//     square.textContent = '';
//     square.removeEventListener('click', handleSquareClick);
//   });

//   if (gameMode === 'easy') {
//     squares.forEach((square) => {
//       square.addEventListener('click', handleSquareClick);
//     });
//   } else {
//     board.innerHTML = '';
//     const flyingInterval = setInterval(() => {
//       if (gameFinished) {
//         clearInterval(flyingInterval);
//       } else {
//         createFlyingSquare();
//       }
//     }, gameMode === 'medium' ? 1000 : 500);
//   }

//   currentPlayer = 'X';
//   gameFinished = false;
// }

// startGame();

// const modeButtons = document.createElement('div');
// modeButtons.classList.add('mode-buttons');
// board.appendChild(modeButtons);

// const easyButton = document.createElement('button');
// easyButton.textContent = 'Easy';
// easyButton.addEventListener('click', () => {
//   gameMode = 'easy';
//   startGame();
// });
// modeButtons.appendChild(easyButton);

// const mediumButton = document.createElement('button');
// mediumButton.textContent = 'Medium';
// mediumButton.addEventListener('click', () => {
//   gameMode = 'medium';
//   startGame();
// });
// modeButtons.appendChild(mediumButton);

// const hardButton = document.createElement('button');
// hardButton.textContent = 'Hard';
// hardButton.addEventListener('click', () => {
// gameMode = 'hard';
// startGame();
// });
// modeButtons.appendChild(hardButton);
