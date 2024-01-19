// Example 1:
//
// Input: arr = [2,1]
// Output: false
// Example 2:
//
// Input: arr = [3,5,5]
// Output: false
// Example 3:
//
// Input: arr = [0,3,2,1]
// Output: true

const arr = [0,1,2,3,1,0];

function validMountainArray(arr: number[]): boolean {
    if (arr.length < 3) return false;

    let peaked = false;

    for (let i = 1; i < arr.length; i++) {
        let prevItem = arr[i - 1],
            currentItem = arr[i];

        if (currentItem === prevItem) return false;

        if (!peaked) {
            if (currentItem < prevItem) {
                if (i === 1) return false; // Исключаем случай восходящей последовательности в начале
                peaked = true;
            }
        } else {
            if (currentItem >= prevItem) return false;
        }
    }

    return peaked; // Вернем tru
}

validMountainArray(arr)