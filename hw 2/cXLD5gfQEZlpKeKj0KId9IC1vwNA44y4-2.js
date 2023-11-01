function findIndexEqualSum(arr)
{
    for(let element = 0; element < arr.length; element++) {
        let leftSum = 0;
        let rightSum = 0;

        for(let leftElement = element-1; leftElement >= 0; leftElement--) {
            leftSum += arr[leftElement];
        }

        for(let rightElement = element+1; rightElement < arr.length; rightElement++) {
            rightSum += arr[rightElement];
        }

        if(leftSum === rightSum) {
            return element;
        }
    }

    return -1;
}

console.log(findIndexEqualSum([1,2,3,4,3,2,1]));
console.log(findIndexEqualSum([1,100,50,-51,1,1]));
console.log(findIndexEqualSum([20,10,-80,10,10,15,35]));