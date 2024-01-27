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

const arr = [0, 2, 1, 0]

// Output: 1
function peakIndexInMountainArray(arr: number[]): number {
    if (arr.length <= 3) return 1;

    let index = 0;
    while (arr[index] < arr[index + 1]) index += 1
    return index
}

peakIndexInMountainArray(arr)

// Option 1
// function peakIndexInMountainArray(arr: number[]): number {
//     if (arr.length <= 3) return 1;
//
//     let peaked = false;
//     let index = 0;
//     for (let i = 1; i < arr.length; i++) {
//         let prevItem = arr[i - 1],
//             currentItem = arr[i];
//
//         if (currentItem === prevItem) return 1;
//
//         if (!peaked) {
//             if (currentItem < prevItem) {
//                 if (i === 1) return 1;
//                 peaked = true;
//                 index = i - 1;
//             }
//         } else {
//             if (currentItem >= prevItem) return 1;
//         }
//     }
//
//     return index;
// };
//
//
// Option 2
// function peakIndexInMountainArray(arr: number[]): number {
//     let [left, right] = [0, arr.length - 1];
//
//     while (left !== right) {
//         const mid = right - Math.floor((right - left) / 2);
//         if (arr[mid] > arr[mid + 1]) {
//             right = mid;
//         }
//         if (arr[mid] > arr[mid - 1]) {
//             left = mid
//         }
//     }
//
//     return left;
// }