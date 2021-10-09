// Intern class with employee properties + school name, getschool method and overriden new role property
const Employee = require("./Employee")
class Intern extends Employee {
    constructor(name, id, email, school) {
            // calling super class employee
            super(name, id, email);
            this.school = school;
        }
        // method to return school
    getSchool() {
            return this.school;
        }
        // overriden method to return the role
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;