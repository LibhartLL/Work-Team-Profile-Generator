const Intern = require("../lib/Intern");

//set college or program affiliation via par
test("Can set school via parameter", () => {
  const testValue = "UCF";
  const employee = new Intern("Foo", 1, "janedoe@test.com", testValue);
  expect(employee.school).toBe(testValue);
});

//set job role by getRole()
test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const employee = new Intern("Foo", 1, "janedoe@test.com", "UCF");
  expect(employee.getRole()).toBe(testValue);
});

//set school by getSchool()
test("Can get school via getSchool()", () => {
  const testValue = "UCF";
  const employee = new Intern("Foo", 1, "janedoe@test.com", testValue);
  expect(employee.getSchool()).toBe(testValue);
});