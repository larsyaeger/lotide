const assertEqual = require('./assertEqual');


function head(x) {
  if (x[0]) {
    return Number(x[0]);
  } else {
    return undefined;
  }
}

module.exports = head;
//test cases are in headTest.js