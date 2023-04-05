var plusOne = function(digits) {
    let toNum=BigInt(digits.join(''))+BigInt(1);
    let Stringm = toNum + '';
    let arr=(Stringm).toString().split('').map(Number);
    return arr;
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,4, 2, 4]));