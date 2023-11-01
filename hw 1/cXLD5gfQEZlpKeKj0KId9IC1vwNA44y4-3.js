function findN(m) {
    let n = 1;
    let volume = 0;

    while(volume < m) {
        volume = 0;

        if(n >= 1) {
            volume += n ** 3;
        }

        if(n >= 2) {
            volume += 1 ** 3;
        }

        for(let i = 1; i <= n-2; i++) {
            volume += (n-i)**3;
        }

        if(volume === m) {
            return n;
        }

        n++;
    }

    return -1;
}

console.log(findN(1071225));
console.log(findN(27+8+1));
console.log(findN(91716553919377));