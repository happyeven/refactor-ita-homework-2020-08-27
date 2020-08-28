class Employee {
  constructor(name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }

  validateType(type) {
    if (![
      'engineer',
      'manager',
      'salesman',
    ].includes(type)) {
      throw new Error(`Employee cannot be of type ${type}`);
    }
  }

  toString() {
    return `${this._name} (${this._type})`;
  }
}

class Engineer extends Employee {
  get type() { return "engineer"; }
}
class Manager extends Employee {
  get type() { return "manager"; }
}
class Salesman extends Employee {
  get type() { return "salesman"; }
}
function createEmployee(name, type) {
  switch (type) {
    case "engineer": return new Engineer(name, type);
    case "salesman": return new Salesman(name, type);
    case "manager": return new Manager(name, type);
    default: throw new Error(`Employee cannot be of type ${type}`);
  }
}
module.exports = { Employee };