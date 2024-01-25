// https://leetcode.com/problems/binary-search/description/
// Example 1:
//
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:
//
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

const nums = [-1,0,3,5,9,12],
      target = 1000
function search(nums: number[], target: number): number {
    for(let index = 0; index < nums.length; index++){
        if(target === nums[index]) return index
    }

    return - 1
}

search(nums, target);