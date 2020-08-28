const printTest = require('ava');
const { printOwing, } = require('../src/print');
printTest('should return amount 7 and name dong when printOwing given customer dong and amount sum 7 ', t => {
    let invoice = {
        borderSpacing: [
            { amount: 2 },
            { amount: 5 }
        ],
        customer: 'dong'
    }
    const result = printOwing(invoice);
    const today = new Date();
    let date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30).toLocaleDateString()
    const expectResult = '***********************\n' +
        '**** Customer Owes ****\n' +
        '***********************\n' + 
        'name: dong\n' + 
        'amount: 7\n'+
        `amount: ${date}`
    t.is(expectResult, result)
});