// https://leetcode.com/problems/valid-perfect-square/description/
// Example 1:
//
// Input: num = 16
// Output: true
// Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
//     Example 2:
//
// Input: num = 14
// Output: false
// Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.

const num = 14;
function isPerfectSquare(num: number): boolean {
    return Number.isInteger(Math.sqrt(num))
}

isPerfectSquare(num)

// Option 2
// function isPerfectSquare(num: number): boolean {
//     if (num < 1) {
//         return false;
//     }
//
//     let i = 1;
//     while (i * i < num){
//         i++;
//     }
//     return i * i === num;
// };
//
// isPerfectSquare(num)