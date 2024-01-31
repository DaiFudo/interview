// https://leetcode.com/problems/add-digits/description/
// Example 1:
//
// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.
//     Example 2:
//
// Input: num = 0
// Output: 0

const num = 38;
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2

function addDigits(num: number): number {
    return 1 + (num - 1) % 9;
}

addDigits(num)

