const contain=require("./containMostWater")
describe(("bbbbb=>1"),()=> {
    test(" [1, 8, 6, 2, 5, 4, 8, 3, 7]=>49",()=>{
        expect(contain.container( [1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    })
    })
describe(("[4, 3, 2, 1, 4]=>16"),()=> {
    test("[4, 3, 2, 1, 4]=>16",()=>{
        expect(contain.container([4, 3, 2, 1, 4])).toBe(16);
    })
    })
    describe((" [1, 2, 1]=>2"),()=> {
test(" [1, 2, 1]=>2",()=>{
    expect(contain.container( [1, 2, 1])).toBe(2);
})
})