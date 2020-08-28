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
  return calculateDatePlusDays(2, calculateDeliveryTimeIsRushFalse(anOrder.deliveryState), anOrder);
}

function calculateDeliveryTimeIsRushFalse(state) {
  let deliveryTime = 4;
  if (isStatesIncludeState([
    'MA',
    'CT',
    'NY',
  ], state)) {
    deliveryTime = 2;
  }
  if (isStatesIncludeState([
    'ME',
    'NH',
  ], state)) {
    deliveryTime = 3;
  }
  return deliveryTime;
}

function calculateDateIsRushTrue(anOrder) {
  return calculateDatePlusDays(1, calculateDeliveryTimeIsRushTrue(anOrder.deliveryState), anOrder);
}
function calculateDeliveryTimeIsRushTrue(state) {
  let deliveryTime = 3;
  if (isStatesIncludeState([
    'MA',
    'CT',
  ], state)) {
    deliveryTime = 1;
  }
  if (isStatesIncludeState([
    'NY',
    'NH',
  ], state)) {
    deliveryTime = 2;
  }
  return deliveryTime;
}

function calculateDatePlusDays(plusDays, deliveryTime, anOrder) {
  return anOrder.placedOn.plusDays(plusDays + deliveryTime);
}
function isStatesIncludeState(states, state) {
  return states.includes(state)
}

