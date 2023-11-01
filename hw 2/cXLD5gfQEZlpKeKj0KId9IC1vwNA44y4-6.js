function findPerimeter(arr) {
    let area = 0;

    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split("");
    }

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] === "X") {
                if(j-1 < 0 || arr[i][j-1] === "O") {
                    area++;
                }
                if(i-1 < 0 || arr[i-1][j] === "O") {
                    area++;
                }

                if(j+1 >= arr[i].length || arr[i][j+1] === "O") {
                    area++;
                }
                if(i+1 >= arr.length || arr[i+1][j] === "O") {
                    area++;
                }
            }

        }
    }

    return `Total land perimeter: ${area}`;
}

console.log(findPerimeter(['XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'OXOOO']));

console.log(findPerimeter(['XOOO',
    'XOXO',
    'XOXO',
    'OOXX',
    'OOOO']));