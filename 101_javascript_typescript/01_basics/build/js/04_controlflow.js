"use strict";
//To handle the control flow we can use if else , switch statements
//falsy values in js
var ac1 = false;
var ac2 = 0;
var ac3 = "";
var ac4 = null;
var ac5 = undefined;
var ac6 = NaN;
// console.log(!!ac3);
var x = 12;
switch (x) {
    case 12:
        console.log("value of x is 12");
    case 13:
        console.log("value of x is 13");
    default:
        console.log("value of  x is undefined");
}
//Control flow while using try catch
try {
    throw new Error("Some error occurred");
}
catch (e) {
    console.error(e);
}
// we can use finally block while handling the error because this block always executed before return statement in the catch block
function textError() {
    try {
        console.log(1);
        throw "bogus";
    }
    catch (e) {
        console.log(2);
        //below return statement is suspended until finally block is executed
        return false;
    }
    finally {
        console.log(3);
        return true;
    }
}
console.log(textError());
