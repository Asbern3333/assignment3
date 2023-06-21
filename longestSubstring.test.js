const long=require("./longestSubstring")
describe("abcabcbb=>3",()=> {
    test("abcabcbb=>3",()=>{
        expect(long.longestSubstring("abcabcbb")).toBe(3);
    })
    })
describe(("bbbbb=>1"),()=> {
 test("bbbbb=>1",()=>{
     expect(long.longestSubstring("bbbbb")).toBe(1);
 })
 })
describe("pwwkew=>4",()=> {
    test("pwwkew=>4",()=>{
        expect(long.longestSubstring("pwwkew")).toBe(4);
    })
    })