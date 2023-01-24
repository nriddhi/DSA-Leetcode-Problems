var singleNumber = function(nums) {
   
    unique = nums[0];
   for(let i = 1; i < nums.length; i++)
   {
    unique = unique ^ nums[i];
    console.log(unique);
   }

   return unique;

};

console.log(singleNumber([1, 2, 2, 3,3]));