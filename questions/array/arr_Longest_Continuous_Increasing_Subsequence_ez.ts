// https://leetcode.com/problems/longest-continuous-increasing-subsequence/description/
// Example 1:
//
// Input: nums = [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
// Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element
// 4.
// Example 2:
//
// Input: nums = [2,2,2,2,2]
// Output: 1
// Explanation: The longest continuous increasing subsequence is [2] with length 1. Note that it must be strictly
// increasing.


const nums = [1, 3, 5, 7]; // 1,3,5 = 3;

function findLengthOfLCIS(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }

    let counter = 1,
        result = 1;

    for (let iterable = 1; iterable < nums.length; iterable++) {
        const previousItem = nums[iterable - 1],
            currentlyItem = nums[iterable];

        if (currentlyItem > previousItem) {
            counter++;
        } else {
            result = Math.max(result, counter);
            counter = 1;
        }
    }

    return Math.max(result, counter);
}

findLengthOfLCIS(nums)
// let count:number = 1
// let res:number = 0
// for(let i = 0 ; i < nums.length ;i++){
//     if(nums[i]>=nums[i+1] || i==nums.length-1){
//         if(res<count)res =count
//         count = 1
//     }else count ++
// }return res