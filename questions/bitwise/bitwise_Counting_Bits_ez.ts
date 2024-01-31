// https://leetcode.com/problems/counting-bits/description/
// Example 1:
//
// Input: n = 2
// Output: [0,1,1]
// Explanation:
//     0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:
//
// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
//     0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

const value = 2

const countBits = (n: number): number[] => {
    const bits = [];

    for (let i = 0; i <= n; i++) {
        let count = 0;
        let num = i;

        while (num > 0) {
            count += num & 1;
            num >>= 1;
        }

        bits.push(count);
    }

    return bits;
}

countBits(value)

// Option 1
// const countBits = (n: number): number[] => {
//     let bits = [0]
//     for (let i = 1; i <= n; i++) {
//         bits.push(bits[Math.floor(i/2)] + (i % 2))
//     }
//     return bits
// }