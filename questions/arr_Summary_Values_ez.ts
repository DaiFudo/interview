// Example 1:
//
// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
//     [0,2] --> "0->2"
//         [4,5] --> "4->5"
//         [7,7] --> "7"
// Example 2:
//
// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
//     [0,0] --> "0"
//         [2,4] --> "2->4"
//         [6,6] --> "6"
//         [8,9] --> "8->9"

const nums = [0,1,2,4,5,7]
function summaryRanges(nums: number[]): string[] {
    let result = [],
        start = nums[0];

    for(let i = 1; i <= nums.length;i++){
        const prevItem = nums[i - 1],
            currentItem = nums[i] ;

        if(currentItem - prevItem === 1) continue

        let str = prevItem === start ? `${start}` : `${start} => ${prevItem}`

            result.push(str)
            start = currentItem
    }

    return result
};

summaryRanges(nums);