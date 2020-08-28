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
deliveryDateTest('should return 3 when deliveryDate given isRush true and deliveryState NY', t => {
    let isRush = true
    let anOrder = {
        deliveryState: 'NY',
        placedOn: {
            plusDays: function (data) {
                return data;
            }
        }
    }
    const result = deliveryDate(anOrder,isRush);
    t.is(3, result)
});
deliveryDateTest('should return 4 when deliveryDate given isRush true and deliveryState AA', t => {
    let isRush = true
    let anOrder = {
        deliveryState: 'AA',
        placedOn: {
            plusDays: function (data) {
                return data;
            }
        }
    }
    const result = deliveryDate(anOrder,isRush);
    t.is(4, result)
});
deliveryDateTest('should return 6 when deliveryDate given isRush false and deliveryState AA', t => {
    let isRush = false
    let anOrder = {
        deliveryState: 'AA',
        placedOn: {
            plusDays: function (data) {
                return data;
            }
        }
    }
    const result = deliveryDate(anOrder,isRush);
    t.is(6, result)
});
deliveryDateTest('should return 5 when deliveryDate given isRush false and deliveryState ME', t => {
    let isRush = false
    let anOrder = {
        deliveryState: 'ME',
        placedOn: {
            plusDays: function (data) {
                return data;
            }
        }
    }
    const result = deliveryDate(anOrder,isRush);
    t.is(5, result)
});
deliveryDateTest('should return 4 when deliveryDate given isRush false and deliveryState MA', t => {
    let isRush = false
    let anOrder = {
        deliveryState: 'MA',
        placedOn: {
            plusDays: function (data) {
                return data;
            }
        }
    }
    const result = deliveryDate(anOrder,isRush);
    t.is(4, result)
});
