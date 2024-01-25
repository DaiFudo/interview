// https://leetcode.com/problems/peak-index-in-a-mountain-array/description/
// Example 1:
//
// Input: arr = [0,1,3,5,6,6,7,5,4,2,1,0]
// Output: 1
// Example 2:
//
// Input: arr = [0,2,1,0]
// Output: 1
// Example 3:
//
// Input: arr = [0,10,5,2]
// Output: 1

// const arr = [3,4,5,1]
// // Output: 1
// function peakIndexInMountainArray(arr: number[]): number {
//     if (arr.length <= 3 ) return 1
//
//     let isHill = 0
//
//     for(let index = 1; index < arr.length; index++){
//         let prevStep = arr[index - 1],
//             currStep = arr[index],
//             nextStep = arr[index + 1];
//
//         if(currStep > prevStep)
//
//         // if(prevStep < currStep) isHill += index
//         // if( arr.length - 1 !== index && currStep > nextStep) isHill = index - 1
//     }
//
//     return isHill
// }
//
// peakIndexInMountainArray(arr)

