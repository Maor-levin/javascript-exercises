// const reverseString = function(word) {
//     return word.split('').reverse().join('')
// };

const reverseString = function(word) {
    let len = word.length;
    res =''
    for( i=len-1 ; i>=0 ; i-- ){
        res = res + word[i];
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
