const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0,
};

const game = {
  playerHand: null,
  ai: null,
  playerHandHTML: null,
};

const hands = [...document.querySelectorAll(".select img")];
const btnStart = document.querySelector(".start");

const playerChoiceText = document.querySelector("#your-choice");
const aiChoiceText = document.querySelector("#computer-choice");
const whoWin = document.querySelector("#who-win");

const numberGames = document.querySelector("#number-of-games");
const palyerWins = document.querySelector("#wins");
const aiWins = document.querySelector("#defeat");
const draw = document.querySelector("#draw");

const handSelection = (e) => {
  handChoice = e.target.id;
  game.playerHand = handChoice;
  hands.forEach((hand) => {
    if (hand.id == handChoice) {
      hand.classList.add("active");
    } else if (hand.id != handChoice) {
      hand.classList.remove("active");
    }
  });
  playerChoiceText.textContent = handChoice;
  aiChoiceText.textContent = "";
  whoWin.textContent = "";
};

const startGame = () => {
  const index = Math.floor(Math.random() * hands.length);
  const aiHand = hands[index].id;
  aiChoiceText.textContent = aiHand;
  if (
    (aiHand == "paper" && game.playerHand == "stone") ||
    (aiHand == "scissors" && game.playerHand == "paper") ||
    (aiHand == "stone" && game.playerHand == "scissors")
  ) {
    whoWin.style.color = "red";
    whoWin.textContent = "Computer Wins";
    gameSummary.losses++;
  } else if (
    (aiHand == "paper" && game.playerHand == "scissors") ||
    (aiHand == "scissors" && game.playerHand == "stone") ||
    (aiHand == "stone" && game.playerHand == "paper")
  ) {
    whoWin.style.color = "green";
    whoWin.textContent = "Player Wins";
    gameSummary.wins++;
  } else {
    whoWin.style.color = "blue";
    whoWin.textContent = "Draw";
    gameSummary.draws++;
  }
  gameSummary.numbers++;
  numberGames.textContent = gameSummary.numbers;
  palyerWins.textContent = gameSummary.wins;
  aiWins.textContent = gameSummary.losses;
  draw.textContent = gameSummary.draws;
};

hands.forEach((hand) => {
  hand.addEventListener("click", handSelection);
});

btnStart.addEventListener("click", startGame);
