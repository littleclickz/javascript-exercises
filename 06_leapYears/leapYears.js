const leapYears = function(year) {
    let byFour = year / 4;
    let byHundred = year / 100;
    let byFourHundred = year / 400;
    if (Number.isInteger(byFour) && !Number.isInteger(byHundred)) {
        return true;
    }
    else if (Number.isInteger(byFour) && (Number.isInteger(byHundred) && Number.isInteger(byFourHundred))) {
        return true;
    }
    else {
        return false;
    }
};

leapYears(1996);

leapYears(1997);

leapYears(34992);

leapYears(1900);

leapYears(1600);

leapYears(700);

// Do not edit below this line
module.exports = leapYears;
