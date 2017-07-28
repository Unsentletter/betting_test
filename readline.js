const readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

let realPerson = {
  name: '',
  sayings: []
};


rl.question("What is the name of a real person? ", function(answer){

  realPerson.name = answer;

  rl.setPrompt(`What would a ${realPerson.name} say?`);

  rl.prompt();

  rl.on('line', function(saying) {

    rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
    rl.prompt();
  })
});