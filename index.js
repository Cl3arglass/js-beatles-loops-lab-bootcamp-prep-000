
function theBeatlesPlay(musicians,instruments) {
  var results = [];
  for(var i = 0; i < musicians.length; i++) {
    results.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return results;
}

// + Create a function `johnLennonFacts`. This function will accept one argument
// , an array of facts about John Lennon (note that it might not be exactly the
//   following facts):
//
// ```js
// const facts = [
//   "He was the last Beatle to learn to drive",
//   "He was never a vegetarian",
//   "He was a choir boy and boy scout",
//   "He hated the sound of his own voice"
// ];
// ```
//
// Use a while loop to loop over the facts array and add `"!!!"`
// to the end of every fact. The function should return an array of strings
// with exclamation points.

function johnLennonFacts(facts) {
var results = [];
var x = 0;
  while(x < facts.length) {
    results.push(facts[x] + '!!!');
    x++;
  }
  return results;
}
