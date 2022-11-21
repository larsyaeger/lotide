function findKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
module.exports = findKeyByValue;

// const map = {
//   name : "Lars",
//   lastName : "Yaeger"
// };
// console.log(findKeyByValue(map,"Yaeger"));
// console.log(findKeyByValue(({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// })))