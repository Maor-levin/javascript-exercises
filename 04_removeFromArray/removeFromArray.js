const removeFromArray = function(array, ...numToRemove) {
    return array.filter( (number) => !numToRemove.includes(number) );
};

// Do not edit below this line
module.exports = removeFromArray;
