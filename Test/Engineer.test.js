const Engineer = require("../Lib/Engineer");

//set GitHub account via the parm
test("Can set GitHUb account via parameter", () => {
  const testValue = "GitHubUser";
  const employee = new Engineer("Foo", 1, "engineer@test.com", testValue);
  expect(employee.github).toBe(testValue);
});

//return engineer buy getRole()
test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const employee = new Engineer("Foo", 1, "engineer@test.com", "GitHubUser");
  expect(employee.getRole()).toBe(testValue);
});

//return GitHub Username by getGithub()
test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const employee = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(employee.getGithub()).toBe(testValue);
});