class Vector {
    constructor(components) {
        this.components = components;
    };

    check_equal_length(vector) {
        return this.components.length === vector.components.length;
    }

    validate_lenght(vector) {
        if(!this.check_equal_length(vector)) {
            throw Error("Different vectors length")
        }
    }

    add(vector) {
        this.validate_lenght(vector);

        let new_components = [];
        for(let i = 0; i < this.components.length; i++) {
            new_components.push(this.components[i] + vector.components[i]);
        }
        return new Vector(new_components);
    };

    subtract(vector) {
        this.validate_lenght(vector);

        let new_components = [];
        for(let i = 0; i < this.components.length; i++) {
            new_components.push(this.components[i] - vector.components[i]);
        }
        return new Vector(new_components);
    };

    dot(vector) {
        this.validate_lenght(vector);

        let result = 0;
        for(let i = 0; i < this.components.length; i++) {
            result += this.components[i] * vector.components[i];
        }
        return result;
    };

    norm(vector) {
        let result = 0;
        for(let i = 0; i < this.components.length; i++) {
            result += this.components[i] ** 2;
        }
        return Math.sqrt(result);
    };

    equals(vector) {
        if(!this.check_equal_length(vector)) {
            return false;
        }

        for(let i = 0; i < this.components.length; i++) {
            if(!(this.components[i] === vector.components[i])) {
                return false;
            }
        }

        return true;
    };

    toString() {
        return `(${(this.components.join(","))})`;
    }
};