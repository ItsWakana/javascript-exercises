const sumAll = function(num1,num2) {
    let sumTotal = 0;
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (typeof num1 === "string" || typeof num2 === "string") {
        return "ERROR";
    } else if (typeof num1 === "object" || typeof num2 === "object") {
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
