const deliveryDateTest = require('ava');
const { deliveryDate, } = require('../src/delivery');
deliveryDateTest('should return 2 when deliveryDate given isRush true and deliveryState MA', t => {
    let isRush = true
    let anOrder = {
        deliveryState: 'MA',
        placedOn: {
            plusDays: function (data) {
                return data;
            }
        }
    }
    const result = deliveryDate(anOrder,isRush);
    t.is(2, result)
});