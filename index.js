const data = ["Bet:W:1:3", "Bet:W:2:4", "Bet:W:3:5", "Bet:W:4:5", "Bet:W:1:16", "Bet:W:2:8", "Bet:W:3:22", "Bet:W:4:57", "Bet:W:1:42", "Bet:W:2:98", "Bet:W:3:63", "Bet:W:4:15", "Bet:P:1:31", "Bet:P:2:89", "Bet:P:3:28", "Bet:P:4:72", "Bet:P:1:40", "Bet:P:2:16", "Bet:P:3:82", "Bet:P:4:52", "Bet:P:1:18", "Bet:P:2:74", "Bet:P:3:39", "Bet:P:4:105", "Bet:E:1,2:13", "Bet:E:2,3:98", "Bet:E:1,3:82", "Bet:E:3,2:27", "Bet:E:1,2:5", "Bet:E:2,3:61", "Bet:E:1,3:28", "Bet:E:3,2:25", "Bet:E:1,2:81", "Bet:E:2,3:47", "Bet:E:1,3:93", "Bet:E:3,2:51", "Result:2:3:1"];

const winCommission = 0.15;
const placeCommission = 0.12;
const exactaCommission = 0.18;
let winnerPool, placePool, exactaPool;
let winningBets = [];
let placingBets1 = [];
let placingBets2 = [];
let placingBets3 = [];
let exactaBets = [];
let winNum = 0;
let placeNum = 0;
let exactaNum = 0;

const first = getResults(data).first;
const second = getResults(data).second;
const third = getResults(data).third;

const bets = data.map(b => {
  const bet = b.split(':');
  return {
    type: bet[1],
    number: bet[2],
    amount: parseInt(bet[3], 10)
  };
});

function getResults(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].includes('Result')) {
      const grossResult = data[i].split(':');
      return {
        first: grossResult[1],
        second: grossResult[2],
        third: grossResult[3]
      }
    }
  }
}

for (let i=0; i < bets.length; i++) {
  if (bets[i].type === 'W') {
    winnerPool = winNum += parseInt(bets[i].amount);
    if (bets[i].number === first) {
      winningBets.push(bets[i])
    }
  } else if (bets[i].type === 'P') {
    if (bets[i].number === first) {
      placingBets1.push(bets[i]);
      placePool = placeNum += parseInt(bets[i].amount);
    } else if (bets[i].number === second) {
      placingBets2.push(bets[i]);
      placePool = placeNum += parseInt(bets[i].amount);
    } else if (bets[i].number === third) {
      placingBets3.push(bets[i]);
      placePool = placeNum += parseInt(bets[i].amount);
    }
  } else if (bets[i].type === 'E') {
    exactaPool = exactaNum += parseInt(bets[i].amount);
    if (bets[i].number === '2,3') {
      exactaBets.push(bets[i])
    }
  }
}

function takeCommission(pool, commission) {
  return pool * commission;
}

function poolMinusComission(pool, commission) {
  return pool - commission;
}

function calculateDivs(payingBets, remainingPool) {
  const pool = payingBets.reduce((sum, bet) => sum + bet.amount, 0);
  const percentage = payingBets[0].amount / pool;
  const percentageOfPool = remainingPool * percentage;
  return percentageOfPool / payingBets[0].amount;
}

console.log(winningBets);

let winnerPrizePool = poolMinusComission(winnerPool, takeCommission(winnerPool, winCommission));
let placePrizePool = parseInt(poolMinusComission(placePool, takeCommission(placePool, placeCommission))) / 3;
let exactaPrizePool = poolMinusComission(exactaPool, takeCommission(exactaPool, exactaCommission));
let winningDivs = calculateDivs(winningBets, winnerPrizePool).toFixed(2);
let placeDivs1 = calculateDivs(placingBets1, placePrizePool).toFixed(2);
let placeDivs2 = calculateDivs(placingBets2, placePrizePool).toFixed(2);
let placeDivs3 = calculateDivs(placingBets3, placePrizePool).toFixed(2);
let exactaDivs = calculateDivs(exactaBets, exactaPrizePool).toFixed(2);

process.stdout.write(String(`Win:${first}:${winningDivs}\n`));
process.stdout.write(String(`Place:${first}:${placeDivs1}\n`));
process.stdout.write(String(`Place:${second}:${placeDivs2}\n`));
process.stdout.write(String(`Place:${third}:${placeDivs3}\n`));
process.stdout.write(String(`Exacta:${first},${second}:${exactaDivs}\n`));

module.exports;