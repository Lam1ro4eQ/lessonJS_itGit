//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

function squareDigits(num){
  let txtArr = String(num).split('');
  let out = '';
  for ( let i = 0; txtArr.length > i; i++ ) {
    out += Math.pow(txtArr[i], 2);
  }
  out = Number(out);
  console.log(typeof(out));
  console.log(out);
  return out;
}


function squareDigits(num){
  let txtArr = String(num).split('');
  let out = '';
  for ( let i = 0; txtArr.length > i; i++ ) {
    out += Math.pow(txtArr[i], 2);
  }
  out = Number(out);
  console.log(typeof(out));
  console.log(out);
  return out;
}

// squareDigits(9123);




// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

function list(names){
  for ( let i = 0; names.length > i; i++ ) {
    1
  }
}

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'