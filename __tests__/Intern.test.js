// Engineer tests

const Intern = require("../lib/Intern")

describe("Intern tests", () => {

    it("Verify that the Intern class can accept and store school property as a string", () => {
        const schoolEl = "school1";
        const internEl = new Intern("Holy", "1234", "test", schoolEl);
        expect(internEl.school).toBe(schoolEl);

    })

    it("Verify that Employee class can create an object when called with the 'new' keyword which returns the role Engineer", () => {
        const roleEl = "Intern";
        const internEl = new Intern();
        expect(internEl.getRole()).toBe(roleEl);
        expect(typeof(internEl)).toBe("object");
    })

})