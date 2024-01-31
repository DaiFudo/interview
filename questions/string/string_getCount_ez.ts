// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
// Return the number (count) of vowels in the given string.
//
//     We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.

let string = 'abracadabra' // 5

function getCount(str) {
    const find = ['a', 'e', 'i', 'o', 'u']
    let counter = 0
    for (let i = 0; i < str.length; i++) {
        find.map((item) => item === str[i] ? counter++ : false)
    }

    return counter;
}

getCount(string)

// Best option
// function getCount(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let counter = 0;
//
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             counter++;
//         }
//     }
//
//     return counter;
// }