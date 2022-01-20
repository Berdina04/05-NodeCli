const commands = require("./commands");

process.stdout.write("prompt > ");
process.stdin.on("data", function (data) {
  let cmd = data.toString().trim();
  let arrayStr = cmd.split(" ");
  let comando = arrayStr[0].toString()

  arrayStr.shift()

  let input = arrayStr.join(' ')
  function done(input) {
    console.log(input);
    process.stdout.write("prompt > ");
  }
  commands[comando](input, done)
  //process.stdout.write("\nprompt >");
});