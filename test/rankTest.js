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
rankTest('should return 3 when calculate voyageRisk given 4 < voyage length < 8 and voyage zone not in specific zones', t => {
  //given
  const voyage = {
    zone: 'west-indies',
    length: 5,
  };
  //when
  const result = voyageRisk(voyage);
  //then
  t.is(3, result)
});
rankTest('should return 7 when calculate voyageRisk given 4 < voyage length < 8 and voyage zone in specific zones', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 5,
  };
  //when
  const result = voyageRisk(voyage);
  //then
  t.is(7, result)
});
rankTest('should return 5 when calculate voyageRisk given voyage length = 10 and voyage zone not in specific zones', t => {
  //given
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  //when
  const result = voyageRisk(voyage);
  //then
  t.is(5, result)
});
rankTest('should return 9 when calculate voyageRisk given voyage length = 10 and voyage zone in specific zones', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 10,
  };
  //when
  const result = voyageRisk(voyage);
  //then
  t.is(9, result)
});
rankTest('should return 7 when calculate captainHistoryRisk given voyage zone is china and history length = 4 and history not has china and 2 profit < 0 history', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: -15,
    }, {
      zone: 'west-africa',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  //when
  const result = captainHistoryRisk(voyage,history);
  //then
  t.is(7, result)
});
rankTest('should return 5 when calculate captainHistoryRisk given voyage zone is china and history length = 4 and history not has china and 0 profit < 0 history', t => {
  //given
  const voyage = {
    zone: 'china',
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
      zone: 'west-africa',
      profit: 2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  //when
  const result = captainHistoryRisk(voyage,history);
  //then
  t.is(5, result)
});
rankTest('should return 2 when calculate captainHistoryRisk given voyage zone is china and history length = 6 and history not has china and 1 profit < 0 history', t => {
  //given
  const voyage = {
    zone: 'china',
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
      zone: 'west-africa',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  //when
  const result = captainHistoryRisk(voyage,history);
  //then
  t.is(2, result)
});
rankTest('should return 2 when calculate captainHistoryRisk given voyage zone is not china and history length = 6 and history has china and 1 profit < 0 history', t => {
  //given
  const voyage = {
    zone: 'east-indies',
    length: 10,
  };
  const history = [
    {
      zone: 'china',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'west-africa',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  //when
  const result = captainHistoryRisk(voyage,history);
  //then
  t.is(2, result)
});
rankTest('should return 0 when calculate captainHistoryRisk given voyage zone is china and history length = 6 and history has china and 1 profit < 0 history', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const history = [
    {
      zone: 'china',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'west-africa',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  //when
  const result = captainHistoryRisk(voyage,history);
  //then
  t.is(0, result)
});
rankTest('should return 0 when calculate captainHistoryRisk given voyage zone is china and history length = 6 and history has china and 0 profit < 0 history', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const history = [
    {
      zone: 'china',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'west-africa',
      profit: 2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  //when
  const result = captainHistoryRisk(voyage,history);
  //then
  t.is(0, result)
});
rankTest('should return 6 when calculate voyageProfitFactor given voyage zone is china and history length = 6 and history has china and voyage length 7', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 7,
  };
  const history = [
    {
      zone: 'china',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'west-africa',
      profit: 2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  //when
  const result = voyageProfitFactor(voyage,history);
  //then
  t.is(6, result)
});
rankTest('should return 7 when calculate voyageProfitFactor given voyage zone is china and history length = 11 and history has china and voyage length 7', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 7,
  };
  const history = [
    {
      zone: 'china',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'west-africa',
      profit: 2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  //when
  const result = voyageProfitFactor(voyage,history);
  //then
  t.is(7, result)
});
rankTest('should return 8 when calculate voyageProfitFactor given voyage zone is china and history length = 11 and history has china and voyage length 13', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 13,
  };
  const history = [
    {
      zone: 'china',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'west-africa',
      profit: 2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  //when
  const result = voyageProfitFactor(voyage,history);
  //then
  t.is(8, result)
});
rankTest('should return 7 when calculate voyageProfitFactor given voyage zone is china and history length = 11 and history has china and voyage length 20', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 20,
  };
  const history = [
    {
      zone: 'china',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'west-africa',
      profit: 2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  //when
  const result = voyageProfitFactor(voyage,history);
  //then
  t.is(7, result)
});
rankTest('should return 3 when calculate voyageProfitFactor given voyage zone is china and history length = 7 and history not has china and voyage length 7', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 7,
  };
  const history = [
    {
      zone: 'west-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'west-africa',
      profit: 2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 2,
    },
  ];
  //when
  const result = voyageProfitFactor(voyage,history);
  //then
  t.is(3, result)
});