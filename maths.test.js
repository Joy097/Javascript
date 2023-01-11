const sum = require('./maths')
test("properly add two numbers", () => {
 expect(sum(1,6)).toBe(7)
})