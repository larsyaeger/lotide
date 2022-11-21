const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

//check for if its two or less
//check for if its even or if its odd
//if its odd do this, if its even do this
function middle (array0) {
//so I dont modify the original array/ something to return
  let result = [];
//if array0 length <= 2 exit the function with an empty array
  if (array0.length <= 2) {
    return [];

//if array0.length is even:    
  } else if (array0.length % 2 === 0) {
    result.push(array0[Math.floor(array0.length / 2) - 1]);
    result.push(array0[Math.floor(array0.length / 2)]);
 

//if array0.length is odd
} else if (array0.length % 2 !== 0) {
//THIS WILL BE THE MIDDLE RESULT AND BY PUSHING IT ONTO RESULT WE GET THE MIDDLE ?
  result.push(array0[Math.floor(array0.length / 2)]);
  } return result
}

module.exports = middle;

//console.log(middle([3, 1, 2, 4]));








// //check for if its two or less
// //check for if its even or if its odd
// //if its odd do this, if its even do this
// function middle (array0) {
//   //so I dont modify the original array/ something to return
//     let result = [];
//   //if array0 length <= 2 exit the function with an empty array
//     if (array0.length <= 2) {
//       return [];
  
//   //if array0.length is even:    
//     } else if (array0.length % 2 === 0) {
//       result.push(array0[Math.floor(array0.length / 2) - 1]);
//       result.push(array0[Math.floor(array0.length / 2)]);
   
  
//   //if array0.length is odd
//   } else if (array0.length % 2 !== 0) {
//   //THIS WILL BE THE MIDDLE RESULT AND BY PUSHING IT ONTO RESULT WE GET THE MIDDLE ?
//     result.push(array0[Math.floor(array0.length / 2)]);
//     } return result
//   }
  
  
  
//   console.log(middle([3, 1, 2, 4]));