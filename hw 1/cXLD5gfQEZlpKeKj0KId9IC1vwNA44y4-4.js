function isPrime(num) {
    if(num <= 1) {
        return false;
    }

    let primeStatus = true;

    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            primeStatus = false;
            return  primeStatus;
        }
    }

    return primeStatus;
}


let testNum = 100;
for(let i = -1; i <= testNum; i++) {
    console.log(i, ": ", isPrime(i));