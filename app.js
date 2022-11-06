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

const table = document.getElementById("table"); //same as board?


//state
let state; 
function buildInitialState() {
  
}

//render
function renderState() {
  
}
//listeners
function onBoardClick() {
  //update state, doze or so helper functions here

  function addXHere(event) {
    console.log("click");
    let target = event.target; //either <td> or <table> depending where you click
    if (event.target.tagName == "TABLE") {
      target.className = null //Change .className when you figure out what you need to put in there
      console.log("this is null")
       } 
  }
  
  renderState()//shouw the user the new state
}
const board = document.getElementById("board")
board.addEventListener("click", onBoardClick)

