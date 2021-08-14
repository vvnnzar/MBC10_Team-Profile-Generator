const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("should create an engineer object", () => {
    const engineer = new Engineer(
      "Thomas",
      470,
      "thomas@test.com",
      "github.com/Thomas"
    );
    expect(engineer).not.toBeNull();
  });

  it("should return the engineer name when we call getName", () => {
    const name = "Thomas",
      id = 470,
      email = "thomas@test.com",
      gitHub = "github.com/Thomas";
    const engineer = new Engineer(name, id, email, gitHub);
    expect(engineer.getName()).toBe(name);
  });

  it("should return the engineer id when call getId", () => {
    const name = "Thomas",
      id = 470,
      email = "thomas@test.com",
      gitHub = "github.com/Thomas";
    const engineer = new Engineer(name, id, email, gitHub);
    expect(engineer.getId()).toBe(id);
  });

  it("should return the engineer email when call getEmail", () => {
    const name = "Thomas",
      id = 470,
      email = "thomas@test.com",
      gitHub = "github.com/Thomas";
    const engineer = new Engineer(name, id, email, gitHub);
    expect(engineer.getEmail()).toBe(email);
  });

  it("should return the engineer github when call getGithub", () => {
    const name = "Thomas",
      id = 470,
      email = "thomas@test.com",
      gitHub = "github.com/Thomas";
    const engineer = new Engineer(name, id, email, gitHub);
    expect(engineer.getGithub()).toBe(gitHub);
  });
  it("should return engineer when call getRole", () => {
    const name = "Thomas",
      id = 470,
      email = "thomas@test.com",
      gitHub = "github.com/Thomas";
    const engineer = new Engineer(name, id, email, gitHub);
    expect(engineer.getRole()).toBe("Engineer");
  });
});
