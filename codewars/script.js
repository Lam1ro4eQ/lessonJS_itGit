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
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Alex'} ]);
// returns 'Bart, Lisa & Maggie'




//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  let out = '';
  if ( number%2 ) {
    out = 'Odd';
  } else {
    out = 'Even';
  }
  return out;
}

//even_or_odd(22);




// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
  str = str.toLowerCase();
    for ( let i = 0; str.length > i; i++) {
      if ( str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
        return false;
      }
    } 
     return true;
}
//console.log(isIsogram('huiloh'));




// На фабрике принтер печатает этикетки для коробок. Для одного вида коробок принтер должен использовать цвета, которые для простоты названы буквами от a to m.
// Цвета, используемые принтером, записываются в контрольную строку. Например, "хорошая" контрольная строка будет aaabbbbhaijjjmозначать, что принтер трижды использовал цвет a, четыре раза цвет b, один раз цвет h, затем один раз цвет a ...
// Иногда возникают проблемы: отсутствие цветов, техническая неисправность и "плохая" контрольная строка получается, например, aaaxbbbbyyhwawiwjjjwwmс буквами не из a to m.
// Вы должны написать функцию, printer_errorкоторая по заданной строке будет возвращать частоту ошибок принтера в виде строки, представляющей рациональное число, числителем которого является количество ошибок, а знаменателем - длина контрольной строки. Не уменьшайте эту дробь до более простого выражения.
// Строка имеет длину больше или равна единице и содержит только буквы от aдо z.
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"
// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"
      
function printerError(s) {
  let tmp = s.split('');
  let sum = 0;
  let err = 0;
  for ( let i = 0; tmp.length > i; i++) { //общее кол-во
    sum++;
    if ( /[^a-m]/gm.test(tmp[i])) {   // кол-во не входящих в диапазон a to m
      err++;
    }
  }
  let res = `${err}/${sum}`;
  return res;
}

// printerError('aaabbbbhaijjjm');





// Вы, наверное, знаете систему «лайков» по ​​Facebook и другим страницам. Люди могут "лайкать" сообщения в блогах, изображения или другие предметы. Мы хотим создать текст, который должен отображаться рядом с таким элементом.
// Реализуйте функцию, которая принимает массив, содержащий имена людей, которым нравится предмет. Он должен возвращать отображаемый текст, как показано в примерах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
  if (names.length == 0) {
    return "no one likes this";
  } else if (names.length == 1) {
    return names[0] + " likes this";  
  } else if (names.length == 2) {
    return names[0] + " and " + names[1] + " like this";
  } else if (names.length == 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else {
    return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
  }
}