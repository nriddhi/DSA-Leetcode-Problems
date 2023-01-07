const search_value = (arr, snum) => {
  let low = 0;
  let high = arr.length;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > snum) {
      high = mid;
    } else if (arr[mid] < snum) {
      low = mid + 1;
    } else {
      console.log(low, high, mid, arr[mid]);
    }
  }

  return high;
};

const arr = [10, 2, 4, 1, 8, 7, 141, 133, 15, 9];
const sorted_arr = arr.sort(function (a, b) {
  return a - b;
});

const t1 = performance.now();
console.log(search_value(sorted_arr, 15));
const t2 = performance.now();
console.log((t2 - t1) / 1000);
