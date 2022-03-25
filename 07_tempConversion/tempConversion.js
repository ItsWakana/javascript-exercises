const ftoc = function(far) {
  let result = (far - 32) * 5/9;
  result.toFixed(0);
  return Number.parseFloat(result);

};

const ctof = function(cel) {
  let result = (cel * 9 / 5) + 32;
  result.toFixed(0);
  return Number.parseFloat(result);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
