/* eslint-disable no-undef */
const form = document.getElementById('form');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const cards = document.querySelectorAll('.card');
const winMessage = document.getElementById('winner');
const container = document.getElementById('container');
const formCon = document.getElementById('formContainer');
const play1score = document.getElementById('p1score');
const play2score = document.getElementById('p2score');
const round = document.getElementById('round');
const aiCheckbox = document.getElementById('ai');

// eslint-disable-next-line prefer-const
let isChecked = aiCheckbox.checked;

play1score.innerHTML = parseFloat(0);
play2score.innerHTML = parseFloat(0);
round.innerHTML += parseFloat(1);
let num = 0;
let sum = 0;
let roundNum = 1;

container.classList.add('target');
// factory for making players
const playerfactory = (name, naughtOrcross) => ({ name, naughtOrcross });
let playchar1 = playerfactory('non', 'O');
let playchar2 = playerfactory('nons', 'X');
// function to add player names to divs
function playernames() {
  const player1Id = document.getElementById('player1-id').value;
  const player2Id = document.getElementById('player2-id').value;
  playchar1 = playerfactory(player1Id, 'O');
  playchar2 = playerfactory(player2Id, 'X');
  player1.textContent = playchar1.name;

  player2.textContent = playchar2.name;
  return { playchar1, playchar2 };
}

let currentPlayer = playchar1;
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
  formCon.classList.add('target');
  container.classList.remove('target');
  isChecked = aiCheckbox.checked;
  playernames();
  createboard();
});

function checkwin() {
  for (const comb of win) {
    if (
      comb.every(
        (index) => cards[index].textContent === currentPlayer.naughtOrcross
      )
    ) {
      if (currentPlayer.naughtOrcross === 'O') {
        num = parseInt(num) + 1;
        play1score.innerHTML = num;
        roundNum = parseInt(roundNum) + 1;
        round.innerHTML = `Round ${roundNum}`;
      } else {
        sum = parseInt(sum) + 1;
        play2score.innerHTML = sum;
        roundNum = parseInt(roundNum) + 1;
        round.innerHTML = `Round ${roundNum}`;
      }
      winMessage.innerHTML = `${currentPlayer.name} wins`;
      setTimeout(() => {
        cards.forEach((card) => {
          card.innerHTML = '';
          winMessage.innerHTML = '';
        });
      }, 2500);
    }
  }
}
function checkDraw() {
  if (Array.prototype.every.call(cards, (card) => card.textContent !== '')) {
    winMessage.innerHTML = 'Draw!';
    round.innerHTML = `Round ${roundNum}`;
    setTimeout(() => {
      cards.forEach((card) => {
        card.innerHTML = '';
        winMessage.innerHTML = '';
      });
    }, 2500);
  }
}

function computerMove() {
  // Generate a random number between 0 and 8
  let randomIndex = Math.floor(Math.random() * 9);

  // Select the square at the random index
  let square = cards[randomIndex];

  // Keep generating a new random index until an empty square is found
  while (square.textContent !== '') {
    randomIndex = Math.floor(Math.random() * 9);
    square = cards[randomIndex];
  }

  // Place an "X" in the empty square
  square.textContent = 'X';
  checkwin();
  checkDraw();
}

cards.forEach((card) => {
  card.addEventListener('click', () => {
    if (card.textContent !== '') {
      return;
    }
    card.innerHTML = currentPlayer.naughtOrcross;
    checkwin();
    checkDraw();

    if (currentPlayer.naughtOrcross === 'O') {
      currentPlayer = playchar2;
    } else {
      currentPlayer = playchar1;
    }
    if (isChecked === true) {
      computerMove();
      currentPlayer = playchar1;
    }
  });
});
// If there are any available numbers, choose one at random

// add an AI component
