//Create a function that returns the tail of an array (all array values except the first)
//We do not want to alter the original array
//We have assertEqual function from earlier

const assertEqual = require('./assertEqual');

const tail = function(array) {
//creating a variable that holds an empty array
  let result = [];
//loop through array.length STARTING with i = 1 so it DOESN'T include the first array
  for (i = 1; i < array.length; i++){
//.push onto result array[i], since it's looping over ever one except 
//the first, all except the first will be pushed onto result  
    result.push(array[i]);
  } 
//return result which now holds the tail of array  
  return result
}
module.exports = tail;

//test cases are in tailTest.js