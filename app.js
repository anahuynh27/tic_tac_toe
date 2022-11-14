const gameState = {
  players: ['x', 'o'],
  board: [
     [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
}

//VAR
const table = document.getElementById("table")
let goButton = document.getElementById("go")
let td = table.querySelectorAll("td")
let reset = document.getElementById("reset")
let tdArray = [...td]


let newArrayX = []
let newArrayO = []
let blankArray = []
let gamerOne = gameState.players[0] //x
let gamerTwo = gameState.players[1] //o
let currentPlayer = gamerOne


let random = Math.floor(Math.random()*td.length)
let randomStart = 1

let winningBoard = [
  [0, 1, 2], //row
[3, 4, 5], //row
[6, 7, 8], 
[0, 3, 6], //col
[1, 4, 7], //col
[2, 5, 8], //col
[0, 4, 8], //diagonal
[2, 4, 6] //diagonal
]

//[0 1 2]
//[3 4 5]
//[6 7 8]
let tdCell = document.querySelectorAll(".cell")

// tdCell.forEach((element, i) => {
//   element.textContent = newArrayO
// })
// console.log(newArrayO)

function checkWin(currentPlayer) {
  // for (let i = 0; i < tdArray.length; i++){
  //   if (td[i].innerHTML !== "") {
  //     blankArray.push(td[i].innerHTML)
  //   } else {
  //     return null
  //   }
  // }

  // console.log("X is",newArrayX)
  // console.log("O is",newArrayO)
  for (let i = 0; i < winningBoard.length; i++){
    
  }
}

function namePrompt() {
  let selectPlayerAmount = document.getElementById("playerSelect")
  let nameDisplay = document.getElementById("pVp")
  let oneOrTwo = selectPlayerAmount.value
    if (oneOrTwo == "One Player") {
        console.log("one")
        let pNameOne = prompt("Player One - Enter Name Below", "Player One")
        nameDisplay.innerText = `${pNameOne} vs. Computer`
        // let randomStart = Math.floor(Math.random() * gameState.players.length)
      // let randomStart = 1
      if (randomStart === 0) {
        console.log(randomStart)
        alert(`${pNameOne} will go first`)
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
      //let randomStart = 0
            if (randomStart == 0) {
              alert(`${ppNameOne} will go first`)
            } else {
              alert(`${ppNameTwo} will go first`)
              table.addEventListener("click", swap)
      }
    } else {
        console.log("didn't work")
        alert("Please select one or two players. Then click 'go'")
  }
}
goButton.addEventListener("click", namePrompt)
function compFirst() {
  if (randomStart === 0) {
    td[random].innerText = gamerTwo
  } else if (randomStart === 1) {
    td[random].innerText = gamerTwo
  } 
  table.addEventListener('click', addXHere)
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
  }else {
    target.innerHTML = gameState.players[0]
  }
  compFirst()
}

function swap(event) {
  if (event.target.className == "cell" && event.target.textContent === "") {
    event.target.textContent = currentPlayer
    currentPlayer = (currentPlayer === gamerOne) ? gamerTwo : gamerOne
  }
  checkWin(winningBoard, currentPlayer)
}

function resetBn() {
  location.reload()
}
reset.addEventListener("click", resetBn)