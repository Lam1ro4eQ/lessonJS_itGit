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





// Тролли атакуют ваш раздел комментариев!
// Обычный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
// Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".
// Примечание: для этого ката y не считается гласной.

function disemvowel(str) {
  let outputString = (str.replace(/[aeiou]/gi, ""));
  console.log(outputString);
  return outputString;
}
//  disemvowel("This website is for losers LOL!");



// В этом ката вы создадите функцию, которая принимает список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными строками.

function filter_list(l) {
  let newarr = [];
  for ( let i = 0; l.length > i; i++ ) {
    if (typeof l[i] == "number") {
      newarr.push(l[i]);
    }
  }
  return newarr;
}
// filter_list([1,2,'aasf','1','123',123]);




// Учитывая случайное неотрицательное число, вы должны вернуть цифры этого числа в массиве в обратном порядке.

function digitize(n) {
  
  let arr = n.toString().split('').reverse();
  
  for ( let i = 0; arr.length > i; i++ ) {
    arr[i] = Number(arr[i]);
  }
  console.log(arr);
  return arr;
}
//  digitize(1234567);




// Ваша задача - отсортировать заданную строку. Каждое слово в строке будет содержать одно число. Это число - позиция, которую слово должно занимать в результате.
// Примечание. Числа могут быть от 1 до 9. Таким образом, первым словом будет 1 (а не 0).
// Если входная строка пуста, вернуть пустую строку. Слова во входной строке будут содержать только действительные последовательные числа.
// Примеры
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words){
  return words.split(" ").sort(function(a,b) {
    return a.match(/\d/) - b.match(/\d/);
  }).join(' ');
}
// order("4of Fo1r pe6ople g3ood th5e the2");




// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
  let sum = 0;
  for ( let i = 0; array.length > i; i++ ) {
  sum = sum + array[i];
 }
 console.log(sum);
  if (sum%2) {
    return 'odd';
  } else { return 'even'}
  
}

// oddOrEven([0, -1, -5]);




// Ваша цель в этом ката - реализовать функцию различия, которая вычитает один список из другого и возвращает результат.
// Он должен удалить все значения из списка a, которые присутствуют в списке, bсохраняя их порядок.
// arrayDiff([1,2],[1]) == [2]
// Если значение присутствует в b, все его вхождения должны быть удалены из другого:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  let arr = [];
  for ( let item of a) {
    if (!b.includes(item)) {
      arr.push(item);
    }
  }
  return arr;
  // for ( let i = 0; a.length > i; i++ ) {
  //   for ( let k = 0; b.length > k; k++ ) {
  //     console.log(a[i]);
  //     if (a[i] == b[k]) {
  //       a.splice(a[i], 1);
  //     }
  //   }
  // }
  // console.log(a);
}

arrayDiff([1,2],[2]);