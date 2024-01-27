// https://leetcode.com/problems/guess-number-higher-or-lower/description/
// Example 1:
//
// Input: n = 10, pick = 6
// Output: 6
// Example 2:
//
// Input: n = 1, pick = 1
// Output: 1
// Example 3:
//
// Input: n = 2, pick = 1
// Output: 1

const n = 10
function guessNumber(n: number): number {
    function guessNumber(n: number): number {
        let left = 1;
        let right = n;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const result = guess(mid);

            if (result === 0) {
                return mid; // Угадали число
            } else if (result === -1) {
                right = mid - 1; // Загаданное число больше
            } else {
                left = mid + 1; // Загаданное число меньше
            }
        }

        return -1;
    };
}

guessNumber(n)