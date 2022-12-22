const form = document.getElementById('form');

// function to add player names to divs
function playernames() {
  let player1Id = document.getElementById('player1-id').value;
  let player2Id = document.getElementById('player2-id').value;
  const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

  player1.innerHTML = player1Id;
  player2.innerHTML = player2Id;
  
}

// eventlistener for form
form.addEventListener('submit', (e ,i) => {
  e.preventDefault();
  playernames();
});

// function an array to make the game board
const win = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
const createboard = () => {
  const gameboard = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
};

// factory for making players
const playerfactory = (name, naughtORcross) => {
const playerReal1.name = player1.innerHTML
const playerReal1.naughtORcross = "O"
const playerReal2.name = player2.innerHTML
const playerReal2.naughtORcross = "X"
const 
};
// function to create a board that corresponds with the gameboard array
// add eventlisteners to the divs and change the inner text to either O or X depending on the turn
// add an AI component
// add a round counter
