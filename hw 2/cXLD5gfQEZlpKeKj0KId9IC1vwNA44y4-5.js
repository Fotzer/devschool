function getRootProperty(object, val) {
    for(let attribute in object) {

        if(Array.isArray(object[attribute])) {

            for(const element of object[attribute]) {

                if(element === val) {
                    return attribute;
                }
            }

        }
        else {
            if(getRootProperty(object[attribute], val)) {
                return attribute;
            }
        }

    }

    return null;
}

let object = {
    "one": {
        "nest1": {
            "val1": [9, 34, 92, 100]
        }
    },
    "2f7": {
        "n1": [10, 92, 53, 71],
        "n2": [82, 34, 6, 19]
    }
}

console.log(getRootProperty(object, 9), "\n"); //=> "one"


object = {
    "r1n": {
        "mkg": {
            "zma": [21, 45, 66, 111],
            "mii": {
                "ltf": [2, 5, 3, 9, 21],
            },
            "fv": [1, 3, 6, 9],
        },
        "rmk": {
            "amr": [50, 50, 100, 150, 250],
        }
    },
    "fik": {
        "er": [592, 92, 32, 13],
        "gp": [12, 34, 116, 29],
    }
}

console.log(getRootProperty(object, 250)); //=> "r1n"
console.log(getRootProperty(object, 116)); //=> "fik"
console.log(getRootProperty(object, 111)); //=> "r1n"
console.log(getRootProperty(object, 999)); //=> null