const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UofM";
  const e = new Intern("Sally", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Sally", 1, "test@test.com", "UofM");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UofM";
  const e = new Intern("Sally", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});