let ps = require("prompt-sync");
let prompt = ps();

let diceRequest = prompt(
  "Enter the number of sides you would like your dice to have: "
);
let riggedRequest = prompt(
  "Enter the rigged number that between the original request: "
);
let randomRoll = Math.floor(Math.random() * Number(diceRequest) + 2);
if (randomRoll == Number(diceRequest) + 1) {
  randomRoll = riggedRequest;
}
console.log(randomRoll);
