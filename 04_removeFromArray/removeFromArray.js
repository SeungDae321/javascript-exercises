// const removeFromArray = function(arr,num) {
//     arr.splice(num - 1, 1)
//     return arr;
// };

const removeFromArray = function(arr, ...num){
    const newArr = [];
    arr.forEach((item)=>{
        if(!num.includes(item)){
            newArr.push(item)
        }
    })
    return newArr;
}

// Do not edit below this line
module.exports = removeFromArray;
