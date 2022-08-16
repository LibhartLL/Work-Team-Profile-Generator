// Define and export the Manager class that is inherit from Employee.
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officePhoneNumber) {
        super(name, id, email);
        this.officePhoneNumber = officePhoneNumber;
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officePhoneNumber;
    }
}

module.exports = Manager;