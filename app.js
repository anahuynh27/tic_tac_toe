const gameState = {
  players: ['x', 'o'],
  board: [
     [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
}
    
let playerX = gameState.players[0];
    console.log(playerX)
let playerO = gameState.players[1];
    console.log(playerO)
  
let random = Math.floor(Math.random())
console.log(random)
const table = document.getElementById("table"); //same as board?

// const board = document.getElementById("board")
// board.addEventListener("click", onBoardClick)

//******* FUNCTIONS BELOW WORKED  ************/
let goButton = document.getElementById("go")
let selectPlayerAmount = document.getElementById("playerSelect")
let playerOne = document.getElementById("first-player")
let playerTwo = document.getElementById("player-two")
//we're going to have <p id="instruction"> change .innerText with player name
function goButtonFn(e) {
  let target = e.target;
  let oneOrTwo = selectPlayerAmount.value
  let nameDisplay = document.getElementById("pVp")
  if (oneOrTwo == "One Player") {
    console.log("one")
    let pNameOne = prompt("Player One - Enter Name Below", "Player One")
    nameDisplay.innerHTML(pNameOne)
  } else if (oneOrTwo == "Two Players") {
    console.log("two")
    let ppNameOne = prompt("Player One - Enter Name Below", "Player One")
    let ppNameTwo = prompt("Player Two - Enter Name Below", "Player Two")
  } else {
    console.log("didn't work")
  }
}
goButton.addEventListener('click', goButtonFn)





function addXHere(event) {
  let target = event.target; //either <td> or <table> depending where you click
  console.log(target)
  console.log("click");
  
  if (target.tagName == "TABLE") {
    target.className = null //Change .className when you figure out what you need to put in there
    console.log("this is null")
  } else {
    target.innerHTML = playerX
     }
}
table.addEventListener('click', addXHere)

//*********MORE GAMES BUTTON**********
let moreGames = document.getElementById("moreGames")
function moreGamesFn() {
  window.open("https://playtictactoe.org/")
}
moreGames.addEventListener("click", moreGamesFn)

//*****************RESET BUTTON
let reset = document.getElementById("reset");
function resetFn() {
  location.reload()
}
reset.addEventListener("click", resetFn)














//MOUSEOVER && i did this on css td:hover
// let td = table.querySelectorAll("td");

// table.addEventListener('mouseover', (e) => {
//   let target = e.target
//   console.log(target)
//   if (target.tagName == "TD") {
//     console.log(e.target.tagName)
//     for (let i = 0; i < td.length; i++) {
//       td[i].style.backgroundColor = "pink"
//     }
//   }
// })





