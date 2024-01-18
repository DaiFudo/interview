const array = [-7, 2, 1, 5, 99, 0];
let counter = 0;

const bubbleSort = (array: number[]) => {
    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let temp = array[j];
                array[j] = array[j + 1]
                array[j + 1] = temp;
            }
        }
    }
    return array;
}


bubbleSort(array);
// 0(n*n)