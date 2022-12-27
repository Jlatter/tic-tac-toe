const form = document.getElementById('form');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const cards = document.querySelectorAll('.card');

// factory for making players
const playerfactory = (name, naughtOrcross) => ({ name, naughtOrcross });

// function to add player names to divs
function playernames() {
  const player1Id = document.getElementById('player1-id').value;
  const player2Id = document.getElementById('player2-id').value;
  const playchar1 = playerfactory(player1Id, 'O');
  const playchar2 = playerfactory(player2Id, 'X');

  player1.textContent = playchar1.name;
  console.log(playchar1.name);

  player2.textContent = playchar2.name;
  return { playchar1, playchar2 };
}
const { playchar1, playchar2 } = playernames();
// function and array to make the game board
const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const createboard = () => {
  for (let i = 0; i < cards.length; i++) {
    cards[i].setAttribute('data-number', i);
  }
};
// eventlistener for form
form.addEventListener('submit', (e) => {
  e.preventDefault();

  playernames();
  createboard();
});
let currentPlayer = playchar1;
cards.forEach((card) => {
  card.addEventListener('click', (event) => {
    if (card.textContent !== '') {
      return;
    }
    card.innerHTML = currentPlayer.naughtOrcross;
    console.log(currentPlayer.naughtOrcross);

    if (currentPlayer === playchar1) {
      currentPlayer = playchar2;
    } else {
      currentPlayer = playchar1;
    }
  });
});

// function to create a board that corresponds with the gameboard array

// add an AI component
// add a round counter
