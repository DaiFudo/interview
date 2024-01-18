const array = [1,4,6,1,2,3,5,6];

const linearSearch = (array: number[], item: number) => {
    for (let i = 0; i < array.length; i++){
        if(array[i] === item){
            return i;
        }
    }
    return null;
}

linearSearch(array, 2)