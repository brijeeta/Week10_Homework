// Manager unit tests

const Manager = require("../lib/Manager");

describe("Manager Tests", () => {

    it("Verify that the Manager class can accept and store office number property as a string", () => {
        const phoneEl = "1234567890";
        const managerEl = new Manager("Holy", "1234", "test", phoneEl);
        expect(managerEl.officeNumber).toBe(phoneEl);
    })


    it("Verify that Employee class can create an object when called with the 'new' keyword which returns the role Manager", () => {
        const roleEl = "Manager";
        const managerEl = new Manager();
        expect(typeof(managerEl)).toBe("object");
        expect(managerEl.getRole()).toBe(roleEl);
    })
})