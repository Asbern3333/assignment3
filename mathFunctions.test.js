const add=require("./mathFunctions")
describe("add return add a+b",()=> {
test("add(5,3) =>8",()=>{
    expect(add.add(5,3)).toBe(8);
})
})
describe("substract return a-b or b-a",()=> {
    test("substract(5,3) =>2",()=>{
        expect(add.subtract(5,3)).toBe(2);
    })
    })
    describe("multiply return  a*b",()=> {
        test("multiply 5*3=>15",()=>{
            expect(add.multiply(5,3)).toBe(15);
        })
        })
        describe("divide return a/b",()=> {
    test("divide(6,3)=>2",()=>{
        expect(add.divide(6,3)).toBe(2);
    })
    })
