let ps = require("prompt-sync");
let prompt = ps();

let customDiceRequest = prompt("Enter a size of dice that you want: ");
let customDice = Math.floor(Math.random() * Number(customDiceRequest) + 1);

console.log(customDice);
