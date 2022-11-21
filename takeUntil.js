//function should return slice of the array with elements taken from the beginning
//should keep going until the callback returns a truthy value
//parameter one will be the array i need to iterate through
//parameter two will be the callback
//basically stop reading this when you see x[i]
//how do i implement that with a callback
//should use .forEach
const takeUntil = function(array, callback) {
//empty result array we push values into 
  let result = [];
 //we use .every instead of .forEach because forEach doesnt allow us
 //to stop the execution of the loop. we are using .every to break
 //the loop once we find that the callback is evaluating as true
 //if callback evaluates as false then we continue
  array.every((currentValue) => {if (!callback(currentValue)) {
 //then we push onto current value
 //characteristic of .every is that we have to return it as true 
 //so it continues looping
    result.push(currentValue);
    return true;
 //else return false so .every knows to stop the loop
  } else if (callback(currentValue)) {
    return false;
  }
})
  return result;
}

module.exports = takeUntil;
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);