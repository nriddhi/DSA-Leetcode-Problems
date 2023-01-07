var targetIndices = function (nums, target) {
  const sorted = nums.sort((a, b) => a - b);
  const valuesIndex = [];
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === target) {
      valuesIndex.push(i);
    }
  }

  return valuesIndex;
};

console.log(targetIndices([1, 2, 3, 4, 2, , 6, 6, 6, 8, 8], 6));
