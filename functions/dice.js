module.exports = {
    dice: (sides, times) => {
        let result = [];
        for (let i = 0; i < times; i++) {
            let diceThrow = Math.floor(Math.random() * Math.floor(sides)) + 1;
            console.log(diceThrow);
            result.push(diceThrow);
        }
        return result;
    },
    sumDices: (list) => {
        let result = 0;
        for (item of list) {
            result += item;
        }
        return result;
    },
    lookTopX: (list, topNmb, trueIfHighest) => {
        if (trueIfHighest) {
            list.sort((a, b) => {
                return b - a;
            });
        } else {
            list.sort((a, b) => {
                return a - b;
            });
        }
        //tän saa varmaan tehtyy helpomminkin..
        let exportList = [];
        for (let i = 0; i < topNmb; i++) {
            exportList.push(list[i]);
        }
        return exportList;
    },
    rollWithAdvantage:(sides)=>{
        return diceFunctions.lookTopX(diceFunctions.dice(sides,2),1,true)[0];
    },
    rollWithDisadvantage:(sides)=>{
        return diceFunctions.lookTopX(diceFunctions.dice(sides,2),1,false)[0];
    }
};
