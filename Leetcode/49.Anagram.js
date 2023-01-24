var groupAnagrams = function(strs) {
    var resultObj = {}, resultArr = [];
    function addIndexToObj (element) {
        var key = element.split("").sort().join("");
        if(resultObj.hasOwnProperty(key)) {
            resultObj[key].push(element);
        } else {
            resultObj[key] = [element];
        }
    }
    strs.forEach(addIndexToObj);
    
    for(var key in resultObj) {
        resultArr.push(resultObj[key]);
    }
    return resultArr;
    
};

console.log(groupAnagrams(["tea","eat","tan","ate","nat","bat"]));