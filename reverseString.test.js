const revers=require("./reverseString")
describe("reverseString return string =>gnirts",()=> {
    test("Hello =>olleh",()=>{
        expect(revers.reverseString("Hello")).toEqual("olleH"); // []
    })
    test("OpenAI=>IAnepO",()=>{
        expect(revers.reverseString("OpenAI")).toEqual("IAnepO"); // []
    })
    test("racecar=>racecar",()=>{  
        expect(revers.reverseString("racecar")).toEqual("racecar"); // []
})
})
        
      