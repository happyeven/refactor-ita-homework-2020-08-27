const printTest = require('ava');
const { printOwing, } = require('../src/print');
printTest(' ', t => {
    let invoice = {
        borderSpacing: [
            { amount: 2 },
            { amount: 5 }
        ],
        customer: 'dong'
    }
    const result = printOwing(invoice);
    t.is('B', result)
});