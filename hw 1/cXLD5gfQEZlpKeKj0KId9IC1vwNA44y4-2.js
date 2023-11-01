function findMinimalMoves(discNum) {
    return (2 ** discNum - 1);
}

console.log(findMinimalMoves(1));
console.log(findMinimalMoves(2));
console.log(findMinimalMoves(3));
console.log(findMinimalMoves(4));
console.log(findMinimalMoves(5));