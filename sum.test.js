const sum=require('./sum');
test("test sum functiom",()=>{
    expect(sum(10,15)).toBe(25);
})