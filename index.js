const commands = require("./commands.js");

const yargs = require("yargs");

let command = yargs.argv._[0];
let lesson = yargs.argv.lesson;
let price = yargs.argv.price;

if (command === "add") {
  if (lesson && price) {
    commands.add(lesson, price);
  }
} else if (command === "remove") {
} else if (command === "remove") {
} else {
  console.log("invalid command");
}
