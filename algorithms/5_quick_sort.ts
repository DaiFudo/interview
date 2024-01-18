const array = [-7, 2, 1, 5, 99, 0];
let counter = 0;

const quickSort: (array: number[]) => (number[]) = (array: number[]) => {
    if(array.length <= 1){
        return array;
    }
    let pivotIndex = Math.floor(array.length / 2),
        pivot = array[pivotIndex],
        less = [],
        greater = [];

    for (let i = 0; i < array.length; i++){
        if(i === pivotIndex){
            continue;
        }
        if(array[i] < pivot){
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}


quickSort(array);
