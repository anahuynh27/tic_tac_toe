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
let td = table.querySelectorAll("td")
console.log(td)


function compPlay(event) {
let random = Math.floor(Math.random() * td.length)
console.log(random)
let addText = td.textContent
addText = random
}

//******* FUNCTIONS BELOW WORKED  ************/

//***********PROMPTS NAME********* */
turnCountsFirst = 5
turnCountsSecond = 4
totalMoves = 9
function xState() {
  function addXHere(event) {
    let target = event.target; //either <td> or <table> depending where you click
    console.log(target)
    console.log("click");
    turnCountsFirst--
    turnCountsSecond--
    totalMoves--
    if (target.tagName == "TABLE") {
      target = null 
      console.log("this is null")
    } else if (target.tagName == "TBODY") {
      target = null
      console.log("this is also null")
    } else {
      target.innerHTML = playerX
    }
  }
  table.addEventListener('click', addXHere)
}
function oState() {
  function addOHere(event) {
    let target = event.target; //either <td> or <table> depending where you click
    console.log(target)
    console.log("click");
    turnCountsFirst--
    turnCountsSecond--
    totalMoves--
    if (target.tagName == "TABLE") {
      target = null
      console.log("this is null")
    } else if (target.tagName == "TBODY") {
      target = null
      console.log("this is also null")
    }else {
      target.innerHTML = playerO
    }
    console.log(totalMoves)
  }
  table.addEventListener('click', addOHere)
}

let goButton = document.getElementById("go")
let selectPlayerAmount = document.getElementById("playerSelect")
let nameDisplay = document.getElementById("pVp")
//we're going to have <p id="instruction"> change .innerText with player name

function goButtonFn() {
  let oneOrTwo = selectPlayerAmount.value

  if (oneOrTwo == "One Player") {
    console.log("one")
    let pNameOne = prompt("Player One - Enter Name Below", "Player One")
    nameDisplay.innerText = `${pNameOne} vs. Computer`
    let randomStart = Math.floor(Math.random() * gameState.players.length)
    if (randomStart == 0) {
      alert(`${pNameOne} will go first`)
      xState()
    } else {
      alert("Computer will go first")
      compPlay()
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
goButton.addEventListener('click', goButtonFn)











//*********PLACES X OR O IN TD******* */
// function addXHere(event) {
//   let target = event.target; //either <td> or <table> depending where you click
//   console.log(target)
//   console.log("click");
  
// if (target.tagName == "TABLE") {
  // target = null
  // console.log("this is null")
  // } else if (target.tagName == "TBODY") {
  // target = null
  // console.log("this is also null")
  // }else {
  //   target.innerHTML = playerX
//      }
// }
// table.addEventListener('click', addXHere)

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





