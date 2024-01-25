// https://leetcode.com/problems/monotonic-array/description/
// Example 1:
//
// Input: nums = [1,2,2,3]
// Output: true
// Example 2:
//
// Input: nums = [6,5,4,4]
// Output: true
// Example 3:
//
// Input: nums = [1,3,2]
// Output: false

const nums = [1, 3,]
// Output: true

function isMonotonic(nums: number[]): boolean {
    let increment = true
    let decrement = true

    for (let item = 1; item < nums.length; item++) {
        let prevItem = nums[item - 1],
            currentItem = nums[item];

        if (currentItem > prevItem) decrement = false
        if (currentItem < prevItem) increment = false

    }

    return increment || decrement
}

isMonotonic(nums)