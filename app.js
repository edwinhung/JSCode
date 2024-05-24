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