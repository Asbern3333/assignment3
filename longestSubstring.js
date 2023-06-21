function longestSubstring(str){
let set=new Set;
for (let i = 0; i < str.length; i++) {
    set.add(str[i]);
}
return set.size
}
module.exports={longestSubstring}