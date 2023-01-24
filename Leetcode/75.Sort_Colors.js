var sortColors = function(nums) {
    let temp = [];
    for (let i = 0; i <nums.length; i++)
    {
       for (let j = 0; j <i; j++) { 
        console.log(nums[i], nums[j]);
        if(nums[i] < nums[j]){
         temp  = nums[i];
         nums[i] = nums[j];
         nums[j] = temp;
         console.log(nums);
        }
       
        
        }   
       
    }

    return nums;
    
};

console.log(sortColors([2,0,2,5,8,1,1,0,555,1]));