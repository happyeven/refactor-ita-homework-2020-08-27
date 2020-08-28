function deliveryDate(anOrder, isRush) {
  if (isRush) {
    return calculateDateIsRushTrue(anOrder);
  }
  return calculateDateIdRushFalse(anOrder);
}

module.exports = {
  deliveryDate
};
function calculateDateIdRushFalse(anOrder) {
  let deliveryTime;
  if ([
    'MA',
    'CT',
    'NY',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 2;
  }
  else if ([
    'ME',
    'NH',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 3;
  }
  else {
    deliveryTime = 4;
  }
  return calculateDatePlusDays(2, deliveryTime, anOrder);
}

function calculateDateIsRushTrue(anOrder) {
  let deliveryTime;
  if ([
    'MA',
    'CT',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 1;
  }
  else if ([
    'NY',
    'NH',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 2;
  }
  else {
    deliveryTime = 3;
  }
  return calculateDatePlusDays(1, deliveryTime, anOrder);
}
function calculateDatePlusDays(plusDays, deliveryTime, anOrder) {
  return anOrder.placedOn.plusDays(plusDays + deliveryTime);
}

