const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("should create employee object", () => {
    const employee = new Employee("Caroline", 36, "caroline@test.com");

    expect(employee).not.toBeNull();
  });

  it("should return employee name when we call getName", () => {
    const name = "Caroline",
      id = 36,
      email = "caroline@test.com";
    const employee = new Employee(name, id, email);

    expect(employee.getName()).toBe(name);
  });

  it("should return the employee Id when we call getId", () => {
    const name = "Caroline",
      id = 460,
      email = "caroline@test.com";
    const employee = new Employee(name, id, email);

    expect(employee.getId()).toBe(id);
  });

  it("should return the employee email when we call getEmail", () => {
    const name = "Caroline",
      id = 460,
      email = "caroline@test.com";
    const employee = new Employee(name, id, email);

    expect(employee.getEmail()).toBe(email);
  });

  it("should return the role when we call getRole", () => {
    const name = "Caroline",
      id = 460,
      email = "caroline@test.com";
    const employee = new Employee(name, id, email);
    expect(employee.getRole()).toBe("Employee");
  });
});
