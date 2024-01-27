// https://leetcode.com/problems/sqrtx/description/

// Example 1:
//
// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:
//
// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
const x = 8;
// 2
function mySqrt(x: number): number {
    let left = 0;
     let right = x;

    while(left <= right){
       let middle = Math.floor((left + right) / 2);
       let value = middle * middle;

        if(value <= x) left = middle + 1;
        else if(middle * middle > x) right = middle - 1

    }
    return right
}

mySqrt(x)
