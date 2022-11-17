
function countLetters (str) {
const results = {};
  for (const letter of Array.from(str)) {
  
    let i = 0;
    //if the letter is already present 
    //get the current count and then add 1
    if (results[letter]) {
      results[letter] = results[letter] + 1;
    } else {
//initialize results
//increment the count
      results[letter] = i + 1;
    }
  }
  return results;
}





console.log(countLetters('bob the'))

