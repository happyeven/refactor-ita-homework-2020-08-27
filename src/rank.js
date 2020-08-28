function voyageRisk(voyage) {
  let result = Math.max(calculateVoyageRisk(voyage), 0);
  return result;
}

function calculateVoyageRisk(voyage) {
  let result = calculateRiskWithVoyageLength(voyage);
  result += calculateRiskWithVoyageZone(voyage, result);
  return result;
}

function calculateRiskWithVoyageZone(voyage, result) {
  if ([
    'china',
    'east-indies',
  ].includes(voyage.zone)) {
    return 4;
  }
  return 0;
}

function calculateRiskWithVoyageLength(voyage) {
  let result = 1
  if (voyage.length > 4) {
    result += 2;
  }
  if (voyage.length > 8) {
    result += voyage.length - 8;
  }
  return result;
}

function hasChina(history) {
  return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk(voyage, history) {
  let result = Math.max(calculateRiskWithCaptainHistory(history, voyage), 0);
  return result;
}

function calculateRiskWithCaptainHistory(history, voyage) {
  let result = calculateRiskWithHistoryLength(history);
  result += calculateRiskWithHistoryProfit(history);
  result += calculateRiskWithSpecificZoneAndHistory(voyage, history);
  return result;
}

function calculateRiskWithSpecificZoneAndHistory(voyage, history, result) {
  if (voyage.zone === 'china' && hasChina(history)) {
    return -2;
  }
  return 0;
}

function calculateRiskWithHistoryProfit(history) {
  return history.filter(v => v.profit < 0).length;
}

function calculateRiskWithHistoryLength(history) {
  let result = 1;
  if (history.length < 5) {
    result += 4;
  }
  return result;
}

function voyageProfitFactor(voyage, history) {
  let result = 2;
  if (voyage.zone === 'china' && hasChina(history)) {
    result += calculateProfitWithBothChinaAndHistoryHasChina(history, voyage);
  } else {
    result += calculateProfitWithNotChinaOrNotHasChinaHistory(history, voyage);
  }
  return result;
}

function calculateProfitWithBothChinaAndHistoryHasChina(history, voyage) {
  let result = 4;
  if (history.length > 10) {
    result += 1;
  }
  if (voyage.length > 12) {
    result += 1;
  }
  if (voyage.length > 18) {
    result -= 1;
  }
  return result;
}

function calculateProfitWithNotChinaOrNotHasChinaHistory(history, voyage) {
  let result = 0
  if (voyage.zone === 'china' || voyage.zone === 'east-indies') {
    result += 1
  }
  if (history.length > 8) {
    result += 1;
  }
  if (voyage.length > 14) {
    result -= 1;
  }
  return result;
}

function rating(voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  if (vpf * 3 > (vr + chr * 2)) {
    return 'A';
  }
  else {
    return 'B';
  }
}

module.exports = {
  rating,
  voyageRisk,
  captainHistoryRisk,
  voyageProfitFactor,
};

const voyage = {
  zone: 'west-indies',
  length: 10,
};
const history = [
  {
    zone: 'east-indies',
    profit: 5,
  }, {
    zone: 'west-indies',
    profit: 15,
  }, {
    zone: 'china',
    profit: -2,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
];
const myRating = rating(voyage, history);
console.log(`myRating: ${myRating}`);
