function reverseString(str){
    let str1="";
    for(var i=0;i<str.length;i++)
    {
        str1+=str[str.length-i-1];
        
    }
    return str1;
}
function palindrom(pal)
{
    for (let i = 0; i < pal.length/2; i++) {
        if(pal[i]!=pal[pal.length-i-1])
        return false;
        
    }
    return true;
}
module.exports={reverseString,palindrom}
