const {createRankData}= require('../src/createRankData');
function judgeRate(data){
  const vpf = data.vpf;
  const vr = data.vr;
  const chr = data.chr;
  return vpf * 3 > (vr + chr * 2)
}
function rating(voyage, history) {
  let data = createRankData(voyage, history)
  if (judgeRate(data)) {
    return 'A';
  }
    return 'B';
}

module.exports = {
  rating,
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
