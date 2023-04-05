let numbers = [1, 2, 3];
let lengtharr = numbers.length;
let newarr = [];

for(let i=0; i<lengtharr; i++)
{

    numbers.push(numbers[i]);
    
}

console.log(numbers);

