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
    // if(str.length === 2)
    // {
    //     return [str,str[1]+str[0]];
    // }
    // if(str.length === 3)
    // {
    //     return [str[0]+str[1]+str[2],str[0]+str[2]+str[1]
    //     ,str[1]+str[0]+str[2],str[1]+str[2]+str[0]
    //     ,str[2]+str[0]+str[1],str[2]+str[1]+str[0]];
    // }
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

module.exports = anagram