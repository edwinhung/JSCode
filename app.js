function find_missing(arr1, arr2) {
    arr1.sort();
    arr2.sort();
    for (let i = 0; i < arr2.length; i++) {
        if (arr1[i] !== arr2[i]) return(arr1[i]);
    }
    return arr1[arr1.length - 1];
}

console.log(find_missing([1, 2, 2, 3], [1, 2, 3]));
console.log(find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]));

function avg(arr) {
    sum = 0;
    for (let i of arr) {
        sum += i;
    }
    return sum / arr.length;
}

console.log(avg([1,2,3,4,5,10]));

function isPangram(str) {
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabetString.split("");
    const strLower = str.toLowerCase();
    for (let alpha of alphabetArray) {
        if (strLower.indexOf(alpha) === -1) return false;
    }
    return true;
}

console.log(isPangram("Sphinx of black quartz, judge my vow."));

function getCard() {
    const RANK = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const SUIT = ['diamond','spade','heart','club'];
    return {
        value: RANK[Math.floor(Math.random() * 13)],
        suit: SUIT[Math.floor(Math.random() * 4)]
    }
}

console.log(getCard());
console.log(getCard());

let bird = 'bird';
function printBird() {
    console.log(bird);
}
printBird();

// higher order functions
// return functions
const powerOf = function(x) { // x >= 0
    return function(num) {
        let sum = 1;
        for (let i = 0; i < x; i++) {
            sum *= num;
        }
        return sum;
    }
}

const square = powerOf(2);
const cube = powerOf(3);
console.log(square(2));
console.log(cube(5));
// forEach with index argument
let nums = [2,3,4,5,6,7];
nums.forEach((num, idx) => console.log(idx,num));

nums = [200,500.5, 1, 99.99, 1000,33.33];
nums.sort((a, b) => b - a);
console.log(nums);
nums.sort((a, b) => a - b);
console.log(nums);