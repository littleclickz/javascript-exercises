const palindromes = function (string) {
    let bareString = string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g, '');
    let caseInsensitive = bareString.toLowerCase();
    let reversedString = "";
    for (let i = caseInsensitive.length - 1; i >= 0; i--) {
        reversedString += caseInsensitive[i];
    }
    if (reversedString === caseInsensitive) {
        return true;
    }
    else {
        return false;
    };
};

// Do not edit below this line
module.exports = palindromes;
