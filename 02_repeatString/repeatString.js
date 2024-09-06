const repeatString = function(string, times) {
    return string.repeat(times);
};

repeatString("hey", 3);

repeatString("hello", 10);

repeatString("hi", 1);

repeatString("bye", 0);

const number = Math.floor(Math.random() * 1000);
repeatString("odin", number);

repeatString("", 10);

// Do not edit below this line
module.exports = repeatString;
