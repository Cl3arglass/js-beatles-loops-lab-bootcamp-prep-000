
function theBeatlesPlay(musicians,instruments) {
  var results = [];
  for(var i = 0; i < musicians.length; i++) {
    results.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return results;
}


function johnLennonFacts(facts) {
var results = [];
var x = 0;
  while(x < facts.length) {
    results.push(facts[x] + '!!!');
    x++;
  }
  return results;
}

// + Create a function `iLoveTheBeatles` which accepts a number as a parameter. The body
// of the function should create a variable that stores an empty array. Then, implement a
// do-while loop inside the function that adds `"I love the Beatles!"` to the empty array.
// Then the loop should increment the number passed in as a parameter. The condition of the loop
// should check to see that the parameter number is less than `15`. The function should return the
// array with the strings `"I love the Beatles!"`.

function iLoveTheBeatles(number) {
  var results = [];
  var i = 0
  do {
    results.push("I love the Beatles!");
    i++;
  }while (i < number && i < 15)
  return results;
}
