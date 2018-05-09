// const fibonacci = require('./lib/fibonacci')
// console.log(fibonacci(1));
function  isLeapYear(n)
{
    if (n%400 ==0)
    {
        return true;
    }
    if (n%100 ==0)
    {
        return false;
    }
    if (n%4 ==0)
    {
        return true;
    }
    return false;
}
function fibonacci(n)
{
    if(n>2)
    {
        return fibonacci(n-1)+fibonacci(n-2);
    }
    return 1;
}



function charDrop(str,n)
{
    charArray = [];
    for(var i = 0;i<str.length;i++)
    {
        if(i != n)
            charArray = charArray + str[i];
    }
    return charArray;
}

function anagram(str)
{
    var strArray = [];
    if(str.length === 0)
    {
        return [];
    }
    if(str.length === 1)
    {
        return [str];
    }
    if(true)
    {
        for(var i = 0;i<str.length;i++)
        {
            var strArrayTemp = anagram(charDrop(str,i));
            for(var j = 0;j<strArrayTemp.length;j++)
            {
                strArray.push(str[i]+strArrayTemp[j]);
            }          
        }
        return strArray;
    }
    return [str];
}


console.log(anagram("abcde"));

//console.log(anagram(charDrop("abc",0)));