const data = ["Bet:W:1:3", "Bet:W:2:4", "Bet:W:3:5", "Bet:W:4:5", "Bet:W:1:16", "Bet:W:2:8", "Bet:W:3:22", "Bet:W:4:57", "Bet:W:1:42", "Bet:W:2:98", "Bet:W:3:63", "Bet:W:4:15", "Bet:P:1:31", "Bet:P:2:89", "Bet:P:3:28", "Bet:P:4:72", "Bet:P:1:40", "Bet:P:2:16", "Bet:P:3:82", "Bet:P:4:52", "Bet:P:1:18", "Bet:P:2:74", "Bet:P:3:39", "Bet:P:4:105", "Bet:E:1,2:13", "Bet:E:2,3:98", "Bet:E:1,3:82", "Bet:E:3,2:27", "Bet:E:1,2:5", "Bet:E:2,3:61", "Bet:E:1,3:28", "Bet:E:3,2:25", "Bet:E:1,2:81", "Bet:E:2,3:47", "Bet:E:1,3:93", "Bet:E:3,2:51", "Result:2:3:1"]

// console.log(data);

const winComission = 0.15;
const placeComission = 0.12;
const exactaComission = 0.18;
let winnerPool, placePool, exactaPool, result, first, second, third;
let winningBets = {};
let winNum = 0;
let placeNum = 0;
let exactaNum = 0;

const bets = data.map(b => {
  const bet = b.split(':');
  return {
    type: bet[1],
    number: bet[2],
    amount: parseInt(bet[3], 10)
  };
});

for (let i=0; i < bets.length; i++) {

  if (bets[i].type.includes('W')) {

    winnerPool = winNum += parseInt(bets[i].amount)

  } else if (bets[i].type.includes('P')) {

    placePool = placeNum += parseInt(bets[i].amount)

  } else if (bets[i].type === 'E') {

    exactaPool = exactaNum += parseInt(bets[i].amount);

  }
}


//
// for(let i = 0; i < text.length; i++) {
//   if (text[i].includes('Result')) {
//
//     // console.log('result', text[i].charAt(7))
//
//     first = text[i].charAt(7);
//     second = text[i].charAt(9);
//     third = text[i].charAt(11);
//
//   }
// }
// for(let i = 0; i < text.length; i++) {
//   if (text[i].includes('W')) {
//     let winners = text[i].split(/[:]+/);
//
//
//     winnerPool = winNum += parseInt(winners[winners.length - 1])
//
// console.log(text[i].charAt(6));
//
//     // if (text[i].charAt(6) === first) {
//     //   winningBets.push('test')
//     // }
//
//   } else if (text[i].includes('P')) {
//     // let placers = text[i].split(/[:]+/);
//     //
//     // placePool = placeNum += parseInt(placers[placers.length - 1])
//
//
//   } else if (text[i].includes('E')) {
//     // let exactas = text[i].split(/[:]+/);
//     //
//     // exactaPool = exactaNum += parseInt(exactas[exactas.length - 1])
//
//
//   } else {
//     // console.log('error')
//   }
// }
//
function takeComissionWin(pool, comission) {
  return pool * comission;
}

console.log('winners pool commission', takeComissionWin(winnerPool, winComission));
console.log('place pool comission', takeComissionWin(placePool, placeComission));
console.log('exacta pool comission', takeComissionWin(exactaPool, exactaComission));
