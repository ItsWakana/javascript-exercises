const sumAll = function(num1,num2) {
    let sumTotal = 0;
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
