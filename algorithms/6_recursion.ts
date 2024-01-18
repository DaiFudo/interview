const number = 5;
const factorial = (number: number) => {
    if(number === 1){
        return 1
    }
    return number * factorial(number - 1)
}


factorial(number);


const fibonachi = (number: number)=> {
    if(number === 1 || number === 2){
        return 1;
    }
    return fibonachi(number - 1) + fibonachi(number - 2);
}
fibonachi(number)