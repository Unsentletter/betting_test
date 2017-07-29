const fs = require('fs'), filename = 'bets.txt';
const data = fs.readFileSync("bets.txt").toString('utf-8');
let text = data.split(/[ ]+/);

// console.log(text);


const winComission = 0.15;
const placeComission = 0.12;
const exactaComission = 0.18;
let winnerPool, placePool, exactaPool, result, first, second, third;
let winningBets = {};
let winNum = 0;
let placeNum = 0;
let exactaNum = 0;



for(let i = 0; i < text.length; i++) {
  if (text[i].includes('Result')) {

    // console.log('result', text[i].charAt(7))

    first = text[i].charAt(7);
    second = text[i].charAt(9);
    third = text[i].charAt(11);

  }
}
for(let i = 0; i < text.length; i++) {
  if (text[i].includes('W')) {
    let winners = text[i].split(/[:]+/);


    winnerPool = winNum += parseInt(winners[winners.length - 1])

console.log(text[i].charAt(6));

    // if (text[i].charAt(6) === first) {
    //   winningBets.push('test')
    // }

  } else if (text[i].includes('P')) {
    // let placers = text[i].split(/[:]+/);
    //
    // placePool = placeNum += parseInt(placers[placers.length - 1])


  } else if (text[i].includes('E')) {
    // let exactas = text[i].split(/[:]+/);
    //
    // exactaPool = exactaNum += parseInt(exactas[exactas.length - 1])


  } else {
    // console.log('error')
  }
}

function takeComissionWin(pool, comission) {
  return pool * comission;
}

function addPayoutPool() {

}

console.log('winners pool commission', takeComissionWin(winnerPool, winComission));


console.log('winners pool', third);
// console.log(placePool);
// console.log(exactaPool);
console.log(winningBets);