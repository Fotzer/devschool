function groupAnagrams(words){
    const result = [];

    for(let i = 0; i < words.length; i++) {
        result.push([words[i]]);
        for(let j = i+1; j < words.length; j++) {

            let word1Letters = words[i].split("");
            let word2Letters = words[j].split("");

            for(let letter1 = 0; letter1 < word1Letters.length; letter1++) {

                while(word2Letters.includes(word1Letters[letter1])) {
                    word2Letters = word2Letters.filter((letter) => {
                        return letter !== word1Letters[letter1];
                    })

                    word1Letters = word1Letters.filter((letter) => {
                        return letter !== word1Letters[letter1];
                    })
                }
            }
            if(word1Letters.length === 0 && word2Letters.length === 0) {
                result[i].push(words[j]);
                words = words.filter((word) => {
                    return word !== words[j];
                })
                j--;
            }
        }
    }
    return result;
}

console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]));