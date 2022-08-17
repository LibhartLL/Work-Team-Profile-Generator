const Manager = require("../Lib/Manager");
const Employee = require("../Lib/Employee");

//set the office phone number parm
test("Can set office phone number via constructor parameter", () => {
  const testValue = 555-555-5555;
  const employee = new Manager("Foo", 1, "janedoe@test.com", testValue);
  expect(employee.officeNumber).toBe(testValue);
});

//set employee role using getRole()
test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const employee = new Manager("Foo", 1, "janedoe@test.com", 555-555-5555);
  expect(employee.getRole()).toBe(testValue);
});

//get office phone number via getOffice()
test("Can get office phone number via getOffice()", () => {
  const testValue = 555-555-5555;
  const employee = new Manager("Foo", 1, "janedoe@test.com", testValue);
  expect(employee.getOfficeNumber()).toBe(testValue);
});
