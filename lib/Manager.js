// Manager class with employee properties + office number and overriden new role property

const Employee = require("./Employee")

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        // calling super class to get the employee class properties
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // method to return office number
    getOfficeNumber() {
        return this.officeNumber;
    }

    // overriden method to return manager role
    getRole() {
        return "Manager";
    }

}

module.exports = Manager;