const str1 = new String("tim");
// console.log(str1.valueOf());
// console.log(str1.substring);

let str2 = "Original";
let str3 = str2.substring(0, str2.length - 2);

// console.log(str3);

//Instance methods

console.log(str2.at(1));
console.log(str2.charAt(1));
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());
//Strings are immutable
//You cannot change/ modify strings
//MEaning each time you reassign the str4 to another string the new memory location is created.

let str4 = "tix";
str4 = "jake";
console.log(str4);

let str5 = "  this is example for testing   ";
let result = str5.trimStart();
console.log(str5.trimEnd());
console.log(str5.trim());
console.log(str5.replace("this", "that"));
console.log(str5.replaceAll("e", "j"));
console.log(str5.padEnd(str5.length + 12, "tim"));
console.log(str5.padStart(str5.length + 12, "tim"));
console.log(str5.endsWith(" "));
console.log(str5.startsWith(" "));
console.log(str5.indexOf("this"));
console.log(str5.lastIndexOf("e"));
console.log(str5.concat(str4));
console.log(str5.includes("is"));
console.log(str4.substring(0, -1)); // we can't give the -1 as a parameter
console.log(str4.substring(0, str4.length));
console.log(str4.slice(0, -1)); // we can give the -1 as a parameter

//Using string literals to put variables and javascript inside string

console.log(
  `This is not a end , ${str4} we must continue the journey, until we see the light.`
);

//Regex in javascript

//Flags in regular expression

const reg1 = /ganesh/g; //here means checking overall string i.e global
const reg2 = /ganesh/i; // This add case insensitiveness in the regular expression
const reg3 = /^ganesh$/m; // allows the multiline approach for the ^ and & means at instead checking at start and end of the entire string it will check at all new line

const reg4 = /ganesh/s; // will allow the . to match the newline character
const reg5 = /ganesh/u; // will allow to match the emojis and symbols

//we can provide the last index for regex

const reg6 = /test/y; // using y flag we can start searching from last index we provided
reg6.lastIndex = 5;

const str6 = "test test";
console.log(reg6.exec(str6));

//character classes

const reg7 = /ga[a-zA-Z0-9]nesh/; //will match to all alphanumeric characters
const reg8 = /ge[^g]nesh/; //will match all but except g after ge in ganesh
const reg9 = /ga\Wnesh/;

const reg10 = /ga.nesh/; // match will all character except escape sequence
const reg11 = /ga\dnesh/; // accept digit
const reg12 = /ga\Dnesh/; //accept non-digit
const reg13 = /ga\wnesh/; // accepts alphanumeric same as [a-zA-Z0-9]
const reg14 = /ga\wnesh/; // will not accept any alphanumeric character
const reg15 = /\sfoot/; // will match the white space
console.log(reg15.exec(" foot wear"));
const reg16 = /ga\Snesh/; // will not match the white space
console.log(reg16.exec(" foot wear"));

const reg17 = /ga\nnesh/; //for new line character
const reg18 = /ga\tnesh/; // for horizontal tab
const reg19 = /ga\vnesh/; // for vertical tab

//Assertions

const reg20 = /^ganesh/; // here ^ represents start with g
const reg21 = /ganesh$/; // here $ represents ends with
const reg22 = /ga.nesh/; // here . means any character except \n,\t,\v any newline characters, -

//Word boundary assertion

const reg23 = /\btoss it/;
console.log(reg23.exec("toss it")); // here \b means character which can be at the start of the string and does not preceded by
//The simple meaning it that when you write the \b in front or behind any text then there should not be any word ro character after or before the word

//if you want your sentence or word should be in between any character you can use \B
const regex24 = /\Bon/;
console.log(regex24.exec("noon"));

//another assertions (Reasoning in regex)

const regex25 = /x(?=o)/; // it will match the x which is followed by o
console.log(regex25.exec("xoxo"));

const regex26 = /t(?!i)/g; // it will only match the t which is not followed by i
console.log(regex26.exec("tik tok"));

const regex27 = /(?<=y)x/g; // will match the x which is preceded by
console.log(regex27.exec("xy yx"));
const regex28 = /(?<!y)x/; //will match the x which is not preceded by y
console.log(regex28.exec("yx ox")); //here we can see that it chooses the x which is not preceded by y

const regex29 = /jimmy(?= (fallon|kimmel))/;
//we can use logical operators

// Test cases
console.log(regex29.exec("jimmy kimmel")); // Works if input is correct. Output: ["jimmy"]

//Using the quantifies

const regex30 = /ga*nesh/; //this will accept the zero or more a
const regex31 = /ga?ansh/; // this wil make the a optional
const regex32 = /ga{0, 2}nesh/; //MInimum 0 and maximum 2 are accepted
const regex33 = /ga{2,}nesh/; // here minimum 2 and there is no limit for maximum
const regex34 = /ganeshs/;
const regex35 = /ga+nesh/; //this will accept the one or more a

//Using string function with regex

console.log("tim is stuffed".search(/stu/)); //search return index and if not found returns -1
console.log("tim is stuffed".match(/stu/));
console.log(
  "tim is stuffed then a cat named lita also got stuffed by excess amount of baking soda in food".matchAll(
    /stu/g
  )
);

//Leet-code1

//Question1:-make the function which gives the amount of count the character appear in the string

function countCharInStr(str: string, char: string) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

function countCharInStr2(str: string, char: string) {
  let count = 0;
  let index = str.indexOf(char);
  while (index !== -1) {
    ++count;
    index = str.indexOf(char, index + 1);
  }
  return count;
}

// console.log(
//   countCharInStr("this is some stuff which i can't share with you", "e")
// );
// console.log(
//   countCharInStr2("this is some stuff which i can't share with you", "e")
// );

//Question2:- Create function t0 check palindrome

function checkStringPalindrome(str: string) {
  let reversedStr = "";
  for (let i = 0; i < str.length; i++) {
    reversedStr = str[i] + reversedStr;
  }
  return reversedStr === str;
}

//Using javascript functions
function checkStringPalindrome2(str: string) {
  return str.toLowerCase() === str.split("").reverse().join("").toLowerCase();
}

// console.log(checkStringPalindrome("efe"));
// console.log(checkStringPalindrome2("efe"));

//Question3:- check character at given index lowercase or not

function checkLowerCase(str: string, index: number) {
  if (str[index] === str[index].toLowerCase()) {
    return true;
  }
  return false;
}

// console.log(checkLowerCase("tim", 1));

//Question4:- write javascript function to extract unique string characters from string eg,aabbrrff ans:abrf

function extractUniqueChar(str: string) {
  let uniqueChars = "";
  for (let i = 0; i < str.length; i++) {
    if (!uniqueChars.includes(str[i])) {
      uniqueChars += str[i];
    }
  }
  return uniqueChars;
}

// console.log(extractUniqueChar("aabbrrff"));

// Question5:-Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//Algorithm:-
/*
step 1:creating loops for rows and columns
step 2:run the loop where row runs n times and column runs 2n-1 times
        eg: if n is 3 then output is 
        # # # # #
        # # # # #
        # # # # #
step 3:now for pyramid we have to create the if condition in which it filter out edging columns in such way  it should look like an pyramid
step 4:- for this we first print # at every mid of row by getting midpoint  and print # at mid point and " " at empty space
step 5:- creating the range in-order to print edging col #
*/

function createPyramid(n: number) {
  let mid = Math.floor((2 * n - 1) / 2);
  //In above we divide by two so and Math.floor it because ot zero based string indexing
  console.log(mid);
  for (let row = 0; row < n; row++) {
    let printingStr = "";
    for (let col = 0; col < 2 * n - 1; col++) {
      if (mid <= col + row && mid >= col - row) {
        printingStr += "#";
      } else {
        printingStr += " ";
      }
    }
    console.log(printingStr);
  }
}
// createPyramid(3);
// createPyramid(4);
