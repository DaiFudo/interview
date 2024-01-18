const array = [0, 1, 2, 3, 4, 5],
    item = 3;
let counter = 0;

const binarySearch = (array: number[], item: number) => {
    let start: number = 0,
        end: number = array.length,
        middle: number,
        found: boolean = false,
        position: number = -1;

    while (found === false && start <= end) {
        counter+=1;

        middle = Math.floor((start + end) / 2);
        if (array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return position
}

binarySearch(array, item)

const recursiveBinarySearch = (array, item, start, end)=> {
    let middle = Math.floor((start + end) / 2);
    if(item === array[middle]){
        return middle;
    }
    if(item < array[middle]){
        recursiveBinarySearch(array, item, start, middle - 1)
    } else {
        recursiveBinarySearch(array, item, middle + 1, end)
    }
}
recursiveBinarySearch(array, item, 0, array.length);