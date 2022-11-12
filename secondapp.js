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
let tdArray = [...td]
console.log(tdArray)
let statusText = document.querySelector("#statusText")

// gameState.board.push(tdArray)
let random = Math.floor(Math.random() * td.length)
// let randomStart = Math.floor(Math.random() * gameState.players.length)
let randomStart = 0

let gamerOne = gameState.players[0]
let gamerTwo = gameState.players[1]
let currentPlayer = gamerOne
function turnSwap() {
  if (randomStart == 0) {
    playerTurn(table.target.id, currentPlayer)
    if (currentPlayer === gamerOne) {
      currentPlayer = gamerTwo
    } else {
      currentPlayer = gameOne
    }
    //currentPlayer = currentPlayer === gamerOne ? gamerTwo : gamerOne
  }
}
function playerTurn(tdArray, game) { 

}


// function togglePlayer() {
 
for (let i = 0; i < tdArray.length; i++){
    if (tdArray[i] == "X" || "O") {
      // console.log("hellow")
    }console.log([i])
  }
//}
function addXHere(event) {
  let target = event.target; //either <td> or <table> depending where you click

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
  table.addEventListener("click", addOHere)
}
function addOHere(event) {
  let target = event.target; //either <td> or <table> depending where you click
  console.log(target)
  console.log("click");
  if (target.tagName == "TABLE") {
    target = null
    console.log("this is null")
  } else if (target.tagName == "TBODY") {
    target = null
    console.log("this is also null")
  }else {
    target.innerHTML = gameState.players[1]
  }
  table.addEventListener("click", addXHere)
}
function compFirst() {
  if (randomStart === 1) {
    td[random].innerText = "O"
    table.addEventListener("click", addXHere)
    randomStart = 0
  } else if (randomStart === 0) {
    td[6].innerText = "O"
    console.log(random)
    table.addEventListener("click", addXHere)
  } 
}

function buildInitialState() {
  let selectPlayerAmount = document.getElementById("playerSelect")
  let nameDisplay = document.getElementById("pVp")
  let oneOrTwo = selectPlayerAmount.value
    if (oneOrTwo == "One Player") {
        console.log("one")
        let pNameOne = prompt("Player One - Enter Name Below", "Player One")
        nameDisplay.innerText = `${pNameOne} vs. Computer`
        // let randomStart = Math.floor(Math.random() * gameState.players.length)
      let randomStart = 0
      if (randomStart === 0) {
        console.log(randomStart)
        alert(`${pNameOne} will go first`)
        compFirst()
      } else if (randomStart === 1) {
        console.log(randomStart)
        alert("Computer will go first")
       compFirst()
      }
//ignore below until you sort out above
    } else if (oneOrTwo == "Two Players") {
        console.log("two")
        let ppNameOne = prompt("Player One - Enter Name Below", "Player One")
        let ppNameTwo = prompt("Player Two - Enter Name Below", "Player Two")
        nameDisplay.innerText = `${ppNameOne} vs. ${ppNameTwo}`
        // let randomStart = Math.floor(Math.random() * gameState.players.length)
      let randomStart = 0
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


//if game is complete

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