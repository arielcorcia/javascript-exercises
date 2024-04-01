const removeFromArray = function(array, ...filter) {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = filter.length - 1; j >= 0; j--)
            if (array[i] === filter[j]){
                array.splice(i, 1)
            }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
