const reverseString = function(str) {
    let arr = str.split('');
    let result = ""
    for (i = arr.length - 1; i >= 0; i--) {
        result += arr[i];
    }
    return result;
};

module.exports = reverseString;
