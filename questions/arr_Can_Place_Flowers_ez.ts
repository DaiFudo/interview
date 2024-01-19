// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
const flowerbed = [1, 0, 0, 0, 1],
    n = 1

const canPlaceFlowers2 = (flowerbed, n) => {
    let places = 0;

    for (let i = 1; i < flowerbed.length; i++) {
        const prevItem = flowerbed[i - 1],
            currentItem = flowerbed[i],
            nextItem = flowerbed[i + 1];

        if (!prevItem && !currentItem && !nextItem) {
            places++
        }
    }
    return places >= n
};

canPlaceFlowers2(flowerbed, n)