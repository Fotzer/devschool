function highAndLow(string) {
    const integers = string.split(" ");

    let min = Number(integers[0]);
    let max = Number(integers[0]);

    for(let num of integers) {
        num = Number(num);

        if(min > num) {
            min = num;
        }

        if(max < num) {
            max = num;
        }
    }

    return `${max} ${min}`;
}

console.log(highAndLow("1 2 3 4 5")); // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"