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

  
  renderState()//shouw the user the new state
}
// const board = document.getElementById("board")
// board.addEventListener("click", onBoardClick)

//WRITE YOUR CODE BELOW
function addXHere(event) {
  let target = event.target; //either <td> or <table> depending where you click
  console.log("click");
  if (event.target.tagName == "TABLE") {
    target.className = null //Change .className when you figure out what you need to put in there
    console.log("this is null")
     } 
}
table.addEventListener('click', addXHere)

//MOUSEOVER && i did this on css td:hover
let td = table.querySelectorAll("td");
console.log(td)

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

//RESET BUTTON
let reset = document.getElementById("reset");
function resetFn() {
  location.reload()
}
reset.addEventListener("click", resetFn)

