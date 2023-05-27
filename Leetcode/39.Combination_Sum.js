function combinationSum(candidates, target) {
    let result = [];
  
    function backtrack(currArr, currSum, start) {
      if (currSum === target) {
        result.push(currArr.slice());
        return;
      }
      if (currSum > target) {
        return;
      }
      for (let i = start; i < candidates.length; i++) {
        currArr.push(candidates[i]);
        backtrack(currArr, currSum + candidates[i], i);
        currArr.pop();
      }
    }
  
    backtrack([], 0, 0);
    return result;
  }
  