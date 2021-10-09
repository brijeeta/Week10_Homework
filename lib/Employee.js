// Employee class for setting employee properties and methods

class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // method which returns employee name
    getName() {
            return this.name;
        }
        // method which returns employee id
    getId() {
            return this.id;
        }
        // method which returns employee email
    getEmail() {
            return this.email
        }
        // method which returns "Employee"
    getRole() {
        return "Employee"
    }
}


module.exports = Employee;