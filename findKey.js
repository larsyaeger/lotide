//we are looping over/scanning object
//just like in takeuntil we will be using a callback for an incognito function
//the function should find which key holds that value or holds what callback is looking for, select the first that applies

const findKey = function (object, callback) {
//loop our keys
  const keys = Object.keys(object);
  for (const key of keys) {
//getting the value
    const value = object[key];
//if its what we want call it
    if (callback(value)) {
      return key
    }
  }
}

const results = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 3) // => "noma"
console.log(results);


//IGNORE THIS CRAP IM LEAVING IT HERE BECAUSE IT SHOWS MY THOUGHT PROCESS

// //will use this later to do result.push  
//   let result = '';
// //I thought to use .every just like I did in takeUntil so it can stop at the first time it sees what callback wants
// //however .every wont work on this and i realized even if it did I just want to display the key,
// //not the key and the value 
// //i will need to implement something like this
// // Object.keys(object).find(key => object[key] === value);
// //which i used for findKeyByValue, but maybe replacing value with callback?
//   object.every((currentValue) => {if (!callback(currentValue)){
//     return true;
//   } else if (callback(currentValue)) {
//       result.push(currentValue);
//       return false;
//     }
//   })
//   return result;
// };

// //Object.keys(object).find(key => object[key] === value);


