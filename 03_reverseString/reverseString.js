// const reverseString = function(word) {
//     let arr = [];
//     for(let letters of word){
//         arr.push(letters);
//     }
//     let reversed = arr.reverse();
//     let newWord = "";
//     for(let letters of reversed){
//         newWord += letters;
//     }
//     return newWord;
// };
//^^above is my stupid and terrible answer...

const reverseString = function (string) {
    return string.split("").reverse().join("");
  };

// Do not edit below this line
module.exports = reverseString;
