const Employee = require('../lib/Employee');

//instantiate a new employee instance
test("show the new employee data", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
});

//set name via constructor parm
test("set name via constructor parameter", () => {
    const name = "Jane Doe";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

//set employee id via constructor parm  
  test("Can set id via constructor parameter", () => {
    const testValue = 100;
    const employee = new Employee("Foo", testValue);
    expect(employee.id).toBe(testValue);
  });

//set employee email via constructor parm
  test("Can set email via constructor parameter", () => {
    const testValue = "janedoe@test.com";
    const employee = new Employee("Foo", 1, testValue);
    expect(employee.email).toBe(testValue);
  });
 
//set employee name via getName()  
  test("Can get name via getName()", () => {
    const testValue = "Jane Doe";
    const employee = new Employee(testValue);
    expect(employee.getName()).toBe(testValue);
  });

//set employee id via getID()
  test("Can get id via getId()", () => {
    const testValue = 100;
    const employee = new Employee("Foo", testValue);
    expect(employee.getId()).toBe(testValue);
  });

//set employee email via getEmail()
  test("Can get email via getEmail()", () => {
    const testValue = "janedoe@test.com";
    const employee = new Employee("Foo", 1, testValue);
    expect(employee.getEmail()).toBe(testValue);
  });
  
//get employee role via getRole()  
  test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const employee = new Employee("Jane Doe", 1, "janedoe@test.com");
    expect(employee.getRole()).toBe(testValue);
  });