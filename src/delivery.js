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
  let state = anOrder.deliveryState
  let deliveryTime;
  if (isStatesIncludeState([
    'MA',
    'CT',
    'NY',
  ], state)) {
    deliveryTime = 2;
  }
  else if (isStatesIncludeState([
    'ME',
    'NH',
  ], state)) {
    deliveryTime = 3;
  }
  else {
    deliveryTime = 4;
  }
  return calculateDatePlusDays(2, deliveryTime, anOrder);
}

function calculateDateIsRushTrue(anOrder) {
  let state = anOrder.deliveryState
  let deliveryTime;
  if (isStatesIncludeState([
    'MA',
    'CT',
  ], state)) {
    deliveryTime = 1;
  }
  else if (isStatesIncludeState([
    'NY',
    'NH',
  ], state)) {
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
function isStatesIncludeState(states, state) {
  return states.includes(state)
}

