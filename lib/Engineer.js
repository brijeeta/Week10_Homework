// Engineer class with employee properties + github name and overriden new role property
const Employee = require("./Employee")
class Engineer extends Employee {
    constructor(name, id, email, githubUname) {
            // calling super class employee
            super(name, id, email);
            this.githubUname = githubUname;
        }
        // method to return githubname
    getGithub() {
            return this.githubUname;
        }
        // overriden method to return the role
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;