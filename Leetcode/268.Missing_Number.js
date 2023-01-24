var missingNumber = function(nums) {
    n= nums.length;
    let sum = 0;
    for (let i=0; i<n; i++)
    { sum = nums[i] + sum}
    return n*(n+1)/2 - sum;
};

var missingNumbers = function(nums) {
    res = nums.length;
    for(let i=0; i<nums.length; i++){
        res = res ^ i;
        res = res ^ nums[i];
        //console.log(res);
    }
    return res;
};



console.log(missingNumbers([0,1,2, 3,4,5, 6, 10, 8,7, 9, 11, 12, 14]));