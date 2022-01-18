module.exports = function reverse(n) {
    let string = n.toString();
    let array = string.split('');
    let reverseArray = array.reverse();
    let reverseString = reverseArray.join('');
    let reverseNumber = parseInt(reverseString);
    return reverseNumber;
};
