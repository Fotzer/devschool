function largestSum(arr, d) {
    let sum = -Infinity;
    const distribution = arr.length/d;
    for(let startLeader = 0; startLeader < distribution; startLeader++) {
        let currentSum = 0
        for(let leader = startLeader; leader < arr.length; leader += distribution) {
            currentSum += arr[leader]
        }

        if(currentSum > sum) {
            sum = currentSum
        }
    }

    return sum;
}

console.log(largestSum([1, 2, 3, 4], 2));
console.log(largestSum([1, 5, 6, 3, 4, 2], 3));
console.log(largestSum([1, 1, 0], 1));
