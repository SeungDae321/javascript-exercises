const sumAll = function(startNum, endNum) {
    let sum = 0;

    if(startNum < endNum){
        for(startNum; startNum <= endNum; startNum++){
            sum+=startNum;
        }
        return sum

    } else if(startNum > endNum){
        for(endNum; endNum <= startNum; endNum++){
            sum+=endNum;
        }
        return sum;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
