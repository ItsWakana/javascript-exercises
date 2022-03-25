const ftoc = function(far) {
  let result = (far - 32) * 5/9;
  let decimalResult = result.toFixed(1);
  return Number.parseFloat(decimalResult);

};

const ctof = function(cel) {
  let result = (cel * 9 / 5) + 32;
  let decimalResult = result.toFixed(1);
  return Number.parseFloat(decimalResult);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
