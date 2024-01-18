const array = [-7,2,1,5,99,0];
let counter = 0;

const selectionSort = (array: number[]) => {

    for(let i = 0; i < array.length; i++){
        let indexMin = i;

        for(let j = i+1; j < array.length; j++){
            if(array[j] < array[indexMin]){
                indexMin = j;
            }
            counter++;
        }

        let temp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = temp;
    }
    return array;
}

selectionSort(array)