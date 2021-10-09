// employee unit tests

const Employee = require("../lib/Employee");

describe("Employee Tests", () => {


    it("Verify that the Employee class can accept and store name property as a string", () => {
        const nameEl = "Holy";
        const employeeEl = new Employee(nameEl);
        expect(employeeEl.name).toBe(nameEl);
    })

    it("Verify that the Employee class can accept and store ID property as a string", () => {
        const idEl = "1234";
        const employeeEl = new Employee("Holy", idEl, "email");
        expect(employeeEl.id).toBe(idEl);
    })

    it("Verify that the Employee class can accept and store ID property as a string", () => {
        const emailEl = "test@gmail.com";
        const employeeEl = new Employee("Holy", "1234", emailEl);
        expect(employeeEl.email).toBe(emailEl);
    })


    it("Verify that Employee class can create an object when called with the 'new' keyword which returns the role Employee", () => {
        const roleEl = "Employee";
        const employeeE1 = new Employee;
        expect(typeof(employeeE1)).toBe("object");
        expect(employeeE1.getRole()).toBe(roleEl);
    })
})