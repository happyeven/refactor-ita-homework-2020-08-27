const employeeTest = require('ava');
const { Employee } = require('../src/employee.js');
 
employeeTest('should return correct message when toString given emplyee engineer', t => {
    let employee = new Employee("Dong", "engineer");
    let result = employee.toString();
    t.is("Dong (engineer)", result);
})
 
