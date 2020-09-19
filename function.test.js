const functions = require('./function')

test('2 to 2 equal 4',()=>{
    expect(functions.add(2,2)).toBe(5)
})
test('2 to 2 equal 4',()=>{
    expect(functions.add(2,2)).not.toBe(45)
})