const array_clone= require('./array_clone');
test('testign  array _clone function',()=>{
    array=[1,2,3,4,5,6,7,8]
    expect(array_clone(array)).toEqual(array)
    expect(array_clone(array)).toBe(array)
})