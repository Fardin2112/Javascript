let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function randomNum() {
    let randomIndex = Math.floor( Math.random() * hands.length) // 0-2.9999
    return randomIndex
}

console.log( hands[randomNum()])