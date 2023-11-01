function sum35(num) {
    let sum = 0;

    for(let element = 1; element < num; element++) {
        if(element % 3 === 0 || element % 5 === 0) {
            sum += element;
        }
    }

    return sum;
}

console.log(sum35(-10));
console.log(sum35(0));
console.log(sum35(4));
console.log(sum35(6));
console.log(sum35(7));