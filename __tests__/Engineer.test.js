// Engineer tests

const Engineer = require("../lib/Engineer")

describe("Engineer tests", () => {

    it("Verify that the Engineer class can accept and store githubname property as a string", () => {
        const gitHubEl = "user1";
        const engineerEl = new Engineer("Holy", "1234", "test", gitHubEl);
        expect(engineerEl.githubUname).toBe(gitHubEl);

    })

    it("Verify that Employee class can create an object when called with the 'new' keyword which returns the role Engineer", () => {
        const roleEl = "Engineer";
        const engineerEl = new Engineer();
        expect(engineerEl.getRole()).toBe(roleEl);
        expect(typeof(engineerEl)).toBe("object");
    })

})