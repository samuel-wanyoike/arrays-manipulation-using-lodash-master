const _ = require('lodash');


// Function to find the maximum value from a number array
const findMaxValue = (numbers) => {
  return _.max(numbers);
}

// Function to return all values from numbers array which are greater than the second parameter
const filterValues = (numbers, threshold) => {
  return _.filter(numbers, num => num > threshold);
}

// Function to return all values of employeeNames array in capital letters
const nameInCapital = (employeeNames) => {
  return _.map(employeeNames, name => _.toUpper(name));
}

module.exports = {
  findMaxValue,
  filterValues,
  nameInCapital,
}