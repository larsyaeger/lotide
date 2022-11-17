function findKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}


const map = {
  name : "Lars",
  lastName : "Yaeger"
};
console.log(findKeyByValue(map,"Yaeger"));