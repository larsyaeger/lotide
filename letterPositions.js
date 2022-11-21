//going to be pushing x position in a loop onto an object as an array

function letterPositions (sentence) {
  const results = {}
  //iterates through each character in the sentence,
  for (i = 0; i < sentence.length; i++) {
  //variable that holds the character of the sentence AT position i
    const character = sentence[i];
  //if we already have seen that character at a different point,
  // add its new position if thats where we are at
    if (results[character]) {
      const valueArray = results[character];
      valueArray.push(i);
   //if its a character we havent seen yet, store its position
   //in a new array assigned to that key
    } else {
      results[character] = [i]
    }
  }
  //store character and its positions
  return results;
}

module.exports = letterPositions
// const result = letterPositions('beeepooooopppppboobddiiiiiiyyttyyyy');
// console.log(result);

//aabc