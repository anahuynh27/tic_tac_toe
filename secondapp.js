const gameState = {
    players: ['x', 'o'],
    board: [
       [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }

let goButton = document.getElementById("go")
const table = document.getElementById("table")
let td = table.querySelectorAll("td")
let random = Math.floor(Math.random() * td.length)

let currentPlayer = []

function winningBoard() {
  let merge = [].concat(gameState.board[0], gameState.board[1], gameState.board[2])
  let mergeStr = merge.toString
  let gb0 = gameState.board[0].toString
  let gb1 = gameState.board[1].toString
  let gb2 = gameState.board[3].toString
  if (gb0 == "X", "X", "X") {
    console.log("Win!")
  } else if (gb1 == "X", "X", "X") {
    console.log("Win!")
  }else if (gb2 == "X", "X", "X") {
    console.log("Win!")
  }
}
function addXHere(event) {
  let target = event.target; //either <td> or <table> depending where you click
  console.log(target)
  console.log("click");
  if (target.tagName == "TABLE") {
    target = null 
    console.log("this is null")
  } else if (target.tagName == "TBODY") {
    target = null
    console.log("this is also null")
  } else {
    target.innerHTML = gameState.players[0] 
  }
}
function compFirst() {
 
    td[random].innerText = "O"
    table.addEventListener("click", addXHere)
 
}

function buildInitialState() {
  let selectPlayerAmount = document.getElementById("playerSelect")
  let nameDisplay = document.getElementById("pVp")
  let oneOrTwo = selectPlayerAmount.value
    if (oneOrTwo == "One Player") {
        console.log("one")
        let pNameOne = prompt("Player One - Enter Name Below", "Player One")
        nameDisplay.innerText = `${pNameOne} vs. Computer`
        let randomStart = Math.floor(Math.random() * gameState.players.length)
      if (randomStart == 0) {
        alert(`${pNameOne} will go first`)
        
      } else if (randomStart == 1) {
        alert("Computer will go first")
       compFirst()
      }
//ignore below until you sort out above
    } else if (oneOrTwo == "Two Players") {
        console.log("two")
        let ppNameOne = prompt("Player One - Enter Name Below", "Player One")
        let ppNameTwo = prompt("Player Two - Enter Name Below", "Player Two")
        nameDisplay.innerText = `${ppNameOne} vs. ${ppNameTwo}`
        let randomStart = Math.floor(Math.random() * gameState.players.length)
            if (randomStart == 0) {
                alert(`${ppNameOne} will go first`)
            } else {
                 alert(`${ppNameTwo} will go first`)
            }
    } else {
        console.log("didn't work")
        alert("Please select one or two players. Then click 'go'")
  }

  
}

// render
function renderState() {

}
// renderState()
// function isDraw() {
//   if (td.value == true) {
    
//   }
// }

// maybe a dozen or so helper functions for tiny pieces of the interface

// listeners
function onBoardClick() {
  // update state, maybe with another dozen or so helper functions...

  renderState() // show the user the new state
}
const board = document.getElementById('board');
// board.addEventListener('click', onBoardClick); // etc

goButton.addEventListener("click", buildInitialState)

















  
  
  //     const table = document.getElementById("table");
  //     // let td = table.querySelectorAll("td")
  //     for (let i = 0; i < gameState.board.length; i++){
  //         let slots = document.createElement("tr")
  //         slots.classList.add("tableRow")
  //         table.appendChild(slots)
  //         for (let j = 0; j < 3; j++){
  //             let cellSlots = document.createElement("td")
  //             cellSlots.classList.add("cells")
  //             table.appendChild(cellSlots)
  //         }
  //     }
  // }