const dxr = require('./destructureXrest');

test("remove the first two number",() => {
    array = [1,2,3,4,5,6,7]
    array1 = [3,4,5,6,7]
    expect(dxr(array)).toEqual(array1)
    expect(dxr(array)).not.toBe(array1)
})