const gameState = {
    players: ['x', 'o'],
    board: [
       [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }
let boardTable = gameState.board.every
console.log(boardTable)

// function buildInitialState() {
//     let goButton = document.getElementById("go")
//     let selectPlayerAmount = document.getElementById("playerSelect")
//     let nameDisplay = document.getElementById("pVp")
    
//     function goButtonFn() {
//     let oneOrTwo = selectPlayerAmount.value

//     if (oneOrTwo == "One Player") {
//         console.log("one")
//         let pNameOne = prompt("Player One - Enter Name Below", "Player One")
//         nameDisplay.innerText = `${pNameOne} vs. Computer`
//         let randomStart = Math.floor(Math.random() * gameState.players.length)
//             if (randomStart == 0) {
//                 alert(`${pNameOne} will go first`)

//             } else {
//                 alert("Computer will go first")

//             }
// //ignore below until you sort out above
//     } else if (oneOrTwo == "Two Players") {
//         console.log("two")
//         let ppNameOne = prompt("Player One - Enter Name Below", "Player One")
//         let ppNameTwo = prompt("Player Two - Enter Name Below", "Player Two")
//         nameDisplay.innerText = `${ppNameOne} vs. ${ppNameTwo}`
//         let randomStart = Math.floor(Math.random() * gameState.players.length)
//             if (randomStart == 0) {
//                 alert(`${ppNameOne} will go first`)
//             } else {
//                  alert(`${ppNameTwo} will go first`)
//             }
//     } else {
//         console.log("didn't work")
//         alert("Please select one or two players. Then click 'go'")
//     }
//     }
//     goButton.addEventListener('click', goButtonFn)
// }

// render
function renderState() {
    const table = document.getElementById("table");
    // let td = table.querySelectorAll("td")
    for (let i = 0; i < gameState.board.length; i++){
        let slots = document.createElement("tr")
        slots.classList.add("tableRow")
        table.appendChild(slots)
        for (let j = 0; j < 3; j++){
            let cellSlots = document.createElement("td")
            cellSlots.classList.add("cells")
            table.appendChild(cellSlots)
        }
    }
}
renderState()


// maybe a dozen or so helper functions for tiny pieces of the interface

// listeners
function onBoardClick() {
  // update state, maybe with another dozen or so helper functions...

  renderState() // show the user the new state
}
const board = document.getElementById('board');
//board.addEventListener('click', onBoardClick); // etc