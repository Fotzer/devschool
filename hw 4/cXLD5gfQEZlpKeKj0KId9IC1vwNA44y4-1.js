function VigenereCipher(key, abc) {
    this.encode = function (str) {
        let new_str = str.split("");
        let key_index = 0;
        for(let i = 0; i < str.length; i++) {
            let char = str[i];

            if(!abc.includes(char)) {
                key_index = (key_index + 1) % key.length;
                continue;
            }


            let char_index_in_abc = abc.indexOf(char);
            let key_index_in_abc = abc.indexOf(key[key_index]);

            let new_letter_index = (key_index_in_abc + char_index_in_abc) % abc.length;
            let new_char = abc[new_letter_index];
            new_str[i] = new_char;

            key_index = (key_index + 1) % key.length;
        }

        return new_str.join("");
    };
    this.decode = function (str) {
        let new_str = str.split("");
        let key_index = 0;
        for(let i = 0; i < str.length; i++) {
            let char = str[i];

            if(!abc.includes(char)) {
                key_index = (key_index + 1) % key.length;
                continue;
            }


            let char_index_in_abc = abc.indexOf(char);
            let key_index_in_abc = abc.indexOf(key[key_index]);

            let new_letter_index = (char_index_in_abc - key_index_in_abc + abc.length) % abc.length;
            let new_char = abc[new_letter_index];
            new_str[i] = new_char;

            key_index = (key_index + 1) % key.length;
        }

        return new_str.join("");
    };
}

let abc, key;
abc = "abcdefghijklmnopqrstuvwxyz";
key = "password";
c = new VigenereCipher(key, abc);


console.log(c.encode('codewars') === 'rovwsoiv');
console.log(c.decode('rovwsoiv') === 'codewars');