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


// squareDigits(9123);




// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

function list(names){
  let out = '';
  for ( let i = 0; names.length > i; i++ ) {
    for ( let item in names[i]) {
      if ( i == names.length - 1) {
        out += `${names[i][item]}`;
      } else if ( i !== names.length - 2 ) {
        out += `${names[i][item]}, `;
        
      } else {
        out += `${names[i][item]} & `;
      }
    }
  }
  return out;
}
//list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Alex'} ])
// returns 'Bart, Lisa & Maggie'




//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  let out = '';
  if ( number%2 ) {
    out = 'Odd';
  } else {
    out = 'Even';
  }
  console.log(out);
  return out;
}

even_or_odd(22);