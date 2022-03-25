const sumAll = function(num1,num2) {
    let sumTotal = 0;
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (num1 == NaN || num2 == NaN) {
        return "ERROR";
    }
    for(i = num1; i <= num2; i++) {
        sumTotal+=i;
    }

    for(i = num1; i>=num2; i--) {
        sumTotal+=i;
    }
    return sumTotal;
};



// Do not edit below this line
module.exports = sumAll;
