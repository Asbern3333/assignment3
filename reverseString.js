function reverseString(str){
    let str1="";
    for(var i=0;i<str.length;i++)
    {
        str1+=str[str.length-i-1];
        
    }
    return str1;
}
module.exports={reverseString};