"use strict";

// let score = 33

// //const {score} = req.body ---> Here we dont even know from where the value for score comming from.

// console.log(typeof score)
// console.log(typeof(score))

// let score1 = "33"

// console.log(typeof score1)
// console.log(typeof(score1))

// let score = "33"

// console.log(typeof score);

// let valueInNumber = Number(score)

// console.log(typeof valueInNumber)

/* In this above case what ever the value we got we will convert it into Number.
    But, there may be a case occure that the given value cant be a number
    At that time what value we are going to get when it is typecasted or converted*/
//==================================Number Case============================================

// let score = "33abc" --> CASE 1 Output: NaN

//let score = null // CASE 2 Output: 0

//let score = undefined // CASE 3 Output: NaN

//let score = true // CASE 4 Output: 1

// //let score = false // CASE 5 Output: 0

// let score = "" // CASE 6 Output: 0

// console.log(typeof score);

// let valueInNumber = Number(score)

// console.log(typeof valueInNumber);

// console.log(valueInNumber); //----> Here the type is converted But the value inside it is a little bit different.
//              //NaN -> Not a Number
// /* Here we need to be careful that 
//    if we dont give any pure number as a string the also our code works 
//    and changes its type in javascript.*/

//=================================Boolean Case=========================================
//let isLoggedIn = 1 //--> CASE 1 Output: true

//let isLoggedIn = 0 // CASE 2 Output: false

//let isLoggedIn = null // CASE 3 Output: false

//let isLoggedIn = undefined // CASE 4 Output: false

//let isLoggedIn = "" // CASE 5 Output: false

//let isLoggedIn = "vamsi" // CASE 6 Output: true

// let isLoggedIn = 10 // CASE 7 Output: true

// console.log(typeof isLoggedIn);

// let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(typeof booleanIsLoggedIn);

// console.log(booleanIsLoggedIn); //----> Here the type is converted But the value inside it is a little bit different.
//              //trueOrfalse

//=================================String Case=========================================
//let someNumber = 1 //--> CASE 1 Output: 1 as string

//let someNumber = 0 // CASE 2 Output: 0 as string

//let someNumber = null // CASE 3 Output: null as a string

//let someNumber = undefined // CASE 4 Output: undefined as a string

//let someNumber = "" // CASE 5 Output: "" string as a string 

//let someNumber = "vamsi" // CASE 6 Output: "vamsi" string as a string


// console.log(typeof someNumber);

// let stringNumber = String(someNumber)

// console.log(typeof stringNumber);

// console.log(stringNumber); //----> Here the type is converted and the values also same only in this case.
//              //EveryThing is converted Into string


/*======================================================================================== */
//                                    Operations             
/*======================================================================================== */

let value = 3

let negValue = -value

// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/2)
// console.log(2%2)

let str1 = "Hello"

let str2 = " vamsi"

let str3 = str1 + str2

//console.log(str3) // --> one way of string concatination

//Here the problem Occures

//console.log("1"+2);

//console.log(1+"2");

//Here comes the tricky case

//console.log("1"+2+2); //--> Output: 122

//console.log(1+2+"2"); //--> Output: 32 Because first(1+2) is evaluated then (3 + "2") is evaluated and we got 32.

//Read documentation to know indetailed Reason.

//Another case

//console.log(true);

//console.log(+true); // here this is another way of type converting into number

//console.log(+""); // here this is another way of type converting into number

//console.log(true+); ---> Here we are going to get error.

//INCREMENT OPERATOR.

let gameCounter = 100

//gameCounter++;

++gameCounter;

console.log(gameCounter);



