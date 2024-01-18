function validMountainArray(arr: number[]): boolean {
    if (arr.length <= 3) {
        return false;
    }

    for(let index = 0; index < arr.length; index++){

        const prevItem = arr[index - 1],
            currentItem = arr[index],
            nextItem = arr[index + 1];

        const flatMount = currentItem === prevItem

        if(!flatMount && prevItem < currentItem){
            continue
        } else if (!flatMount && currentItem > nextItem){
            return true
        }
    }
};