// https://leetcode.com/problems/running-sum-of-1d-array/description/
// Example 1:
//
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
//     Example 2:
//
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
//     Example 3:
//
// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// [1,3,6,10]
// Normal option
// nums[1] += nums[0] -> nums[1] = 2 + 1 = 3

const nums = [1, 2, 3, 4];

function runningSum(nums: number[]): number[] {

    for (let item = 1; item < nums.length; item++) {
        nums[item] += nums[item - 1]
    }

    return nums;
}

runningSum(nums)

// Option 1
// function runningSum(nums: number[]): number[] {
//     let safeNum = 0;
//     let newNums: number[] = [];
//
//     for (let item = 0; item < nums.length; item++) {
//         safeNum = nums[item] + safeNum;
//         newNums.push(safeNum)
//     }
//
//     return newNums;
// };