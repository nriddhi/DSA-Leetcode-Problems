const search_value = (sortedArray, key) => {
  let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            return middle;

        } else if (sortedArray[middle] < key) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
};

const arr = [10, 2, 4, 1, 8, 7, 141, 133, 15, 15, 9];
const sorted_arr = arr.sort(function (a, b) {
  return a - b;
});

console.log(search_value(sorted_arr, 155));

