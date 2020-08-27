const rankTest = require('ava');
const { rating ,voyageRisk,captainHistoryRisk,voyageProfitFactor,} = require('../src/rank');
rankTest('', t => {
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
  t.is('B', myRating)
});
rankTest('should return 1 when calculate voyageRisk given voyage length < 4 and voyage zone not in specific zones', t => {
  //given
  const voyage = {
    zone: 'west-indies',
    length: 1,
  };
 //when
  const result = voyageRisk(voyage);
  //then
  t.is(1, result)
});
rankTest('should return 5 when calculate voyageRisk given voyage length < 4 and voyage zone in specific zones', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 1,
  };
 //when
  const result = voyageRisk(voyage);
  //then
  t.is(5, result)
});