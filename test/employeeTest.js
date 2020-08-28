const employeeTest = require('ava');
const { Employee ,createEmployee} = require('../src/employee.js');
 
employeeTest('should return correct message when toString given employee engineer', t => {
    let employee = createEmployee("Dong", "engineer");
    let result = employee.toString();
    t.is("Dong (engineer)", result);
});

employeeTest('should return error when toString given a type dong', t => {
    try {
        let employee = createEmployee("", "Dong");
        t.fail();
    } catch (e) {
        t.is("Employee cannot be of type Dong", e.message);
    }
})
 
