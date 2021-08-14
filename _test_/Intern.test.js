const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("should create an object", () => {
    const intern = new Intern(
      "Dylan",
      501,
      "dylan@test.com",
      "Melbourne University"
    );
    expect(intern).not.toBeNull();
  });
  it("should return the intern name when call getName", () => {
    const name = "Dylan",
      id = 501,
      email = "dylan@test.com",
      school = "Melbourne University";
    const intern = new Intern(name, id, email, school);
    expect(intern.getName()).toBe(name);
  });

  it("should return the intern id when call getId", () => {
    const name = "Dylan",
      id = 501,
      email = "dylan@test.com",
      school = "Melbourne University";
    const intern = new Intern(name, id, email, school);
    expect(intern.getId()).toBe(id);
  });

  it("should return the intern email when call getEmail", () => {
    const name = "Dylan",
      id = 501,
      email = "dylan@test.com",
      school = "Melbourne University";
    const intern = new Intern(name, id, email, school);
    expect(intern.getEmail()).toBe(email);
  });

  it("should return the school when call getSchool", () => {
    const name = "Dylan",
      id = 501,
      email = "dylan@test.com",
      school = "Melbourne University";
    const intern = new Intern(name, id, email, school);
    expect(intern.getSchool()).toBe(school);
  });

  it("should return intern when call getRole", () => {
    const name = "Dylan",
      id = 501,
      email = "dylan@test.com",
      school = "Melbourne University";
    const intern = new Intern(name, id, email, school);
    expect(intern.getRole()).toBe("Intern");
  });
});
