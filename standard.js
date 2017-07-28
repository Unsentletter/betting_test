const fs = require('fs'), filename = 'bets.txt';
const data = fs.readFileSync("bets.txt").toString('utf-8');
let text = data.split(/[ ]+/);

const winComission = 0.15;
const placeComission = 0.12;
const exactaComission = 0.18;
let winnerPool, placePool, exactaPool, result;
let winNum = 0;
let placeNum = 0;
let exactaNum = 0;



for(let i = 0; i < text.length; i++){
  if (text[i].includes('Result')) {

    // console.log(text[i])


  } else if (text[i].includes('W')) {
    let winners = text[i].split(/[:]+/);

    winnerPool = winNum += parseInt(winners[winners.length - 1])


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

function takeComissionWin (pool, comission) {
  return pool * comission;
}

console.log(takeComissionWin(winnerPool, winComission));


console.log(winnerPool);
// console.log(placePool);
// console.log(exactaPool);