// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
const flowerbed = [1,0,0,0,1],
      n = 1

const canPlaceFlowers2 = (flowerbed, n) => {
    let findPlace = 0;

    for (let i = 0; i < flowerbed.length; i++) {

        const prevIndex = i - 1,
            middleIndex = i,
            nextIndex = i + 1;

        if((!flowerbed[prevIndex])
            && (!flowerbed[middleIndex])
            && (!flowerbed[nextIndex])) {
            findPlace++
        }
    }

    return findPlace >= n;
};

canPlaceFlowers2(flowerbed, n)