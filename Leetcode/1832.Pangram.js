function stringCheck(sentence)
{
    let regex = /([a-z])(?!.*\1)/gi;

    if( sentence.match(regex).length===26)
        console.log('true')
    else
        console.log('false')

}

stringCheck('leetcode');