// const repeatString = function(word,times) {
//     result = ''
//     if (times<0) return 'ERROR';
//     for (let i=0 ; i<times ; i++){
//         result = result + word ;
//     }
//     return result;
// };

const repeatString = function(word,times) {
    if (times<0) return 'ERROR';
    return word.repeat(times);
    
};

// Do not edit below this line
module.exports = repeatString;
