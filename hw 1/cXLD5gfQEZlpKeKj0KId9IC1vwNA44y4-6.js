function sort(int) {
    function mySort(arr) {
        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < arr.length-i-1; j++) {
                if(arr[j] > arr[j+1]) {
                   let temp = arr[j];
                   arr[j] = arr[j+1];
                   arr[j+1] = temp;
                }
            }
        }

        return arr;
    }

    const string = int.toString();
    const array = string.split("");
    const sortedArray = mySort(array).reverse();
    const descendingString = sortedArray.join("");
    return Number(descendingString);
}

console.log(sort(42145));
console.log(sort(145263));
console.log(sort(123456789));