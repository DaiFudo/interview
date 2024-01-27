// https://leetcode.com/problems/search-insert-position/description/
// Example 1:
//
// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:
//
// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:
//
// Input: nums = [1,3,5,6], target = 7
// Output: 4

let nums = [1,2,3,4,5],
    target = 3;
// Output: 1

function searchInsert(nums: number[], target: number): number {
    let left = 0,
        right = nums.length - 1;

    while (left <= right){
        let middle = Math.floor((left + right) / 2);

        if(target === nums[middle]) return middle
        else if(nums[middle] < target) left = middle + 1
        else right = middle - 1
    }

    return left;
}

searchInsert(nums, target);