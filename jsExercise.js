// Fix the code so that i declared in the if statement is a separate variable 
// than i declared in the first line of the function. 
// Be certain not to use the var keyword anywhere in your code.

function checkScope() {
  var i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

checkScope()
