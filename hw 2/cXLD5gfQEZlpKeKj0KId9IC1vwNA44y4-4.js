function unpackSausages(truck) {
    let result = "";
    let rewardCount = 1;

    for(const box of truck) {
        packageUnpack: for(const packageFromBox of box) {

            if(packageFromBox.at(0) !== "[" && packageFromBox.at(-1) !== "]") {
                continue;
            }

            const sausages = packageFromBox.slice(1, -1).split("");
            const sausage = sausages[0];

            for(let i = 1; i < sausages.length; i++) {
                if(sausage !== sausages[i]) {
                    continue packageUnpack;
                }
            }

            if(rewardCount === 5) {
                rewardCount = 0;
                continue;
            }

            for(const sausage of sausages) {
                result += `${sausage} `;
            }

            rewardCount++;
        }
    }
    return result.slice(0, -1);
}

console.log(unpackSausages([ [ "(-)", "[IIII]", "[))))]" ], [ "IuI", "[llll]" ], [ "[@@@@]", "UwU", "[IlII]" ], [ "IuI", "[))))]", "x" ], [] ]));