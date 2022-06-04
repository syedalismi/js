// Exercise # 1

var checkNumber = parseInt(prompt("Please enter number you want to check divisible by 3 or not?"));
let resultantNumber = checkNumber % 3;

if (resultantNumber == 0){
    alert(checkNumber + " is divisible by 3");
}
else
{
    alert(checkNumber + " is not divisible by 3");
}
 
// Exercise # 2

var evenOddNumber = parseInt(prompt("Please enter number you want to check even or odd?"));
let resNumber = evenOddNumber % 2;

if (resNumber == 0){
    alert(evenOddNumber + " is even number");
}
else
{
    alert(evenOddNumber + " is odd number");
}

// Exercise # 3

var age = parseInt(prompt("Please enter age"));

if (age > 18){
    alert("Age : " + age + " Old enough");
}
else{
    alert("Age : " + age + " Too young");
}

// Exercise # 4

var inputName = prompt("Please enter your name");
let myName = "S M ALI";

if (inputName.toLowerCase() == myName.toLowerCase()){
    alert("Welcome Mr. " + inputName);
}

// Exercise # 5

var checkNumber1 = parseInt(prompt("Please enter number you want to check divisible by 3 or not?"));
let resultantNumber1 = checkNumber1 % 3;

switch(resultantNumber1) {
    case 0:
        alert(checkNumber1 + " is divisible by 3");
        break;
    default:
        alert(checkNumber1 + " is not divisible by 3");
  } 

// Exercise # 6

var single_Char = prompt("Please enter single character (i.e. string of length 1)");

if (single_Char.length == 1){
    if (single_Char.charCodeAt(0) >= 65 && single_Char.charCodeAt(0) <= 90){
        
        console.log(single_Char.charCodeAt(0));

        alert("You have input character '" + single_Char + "' in upper case.");

    }
    else if(single_Char.charCodeAt(0) >= 97 && single_Char.charCodeAt(0) <= 122){
        alert("You have input character '" + single_Char + "' in lower case.");
    }
    else if(single_Char.charCodeAt(0) >= 48 && single_Char.charCodeAt(0) <= 57){
        alert("You have input a number i.e.: " + single_Char);
    }
}
else{
    alert("String length should not be greater than one.");
}

// Exercise # 7

var num1 = parseInt(prompt("Please enter first number"));
var num2 = parseInt(prompt("Please enter second number"));
var operator = prompt("Please enter the operator (+, -, *, /, %)");

var numResult;

switch(operator) {
    case "+":
        numResult = num1 + num2;
        alert(num1 + " " + operator + " " + num2 + " is " + numResult);
        break;
    case "-":
        numResult = num1 - num2;
        alert(num1 + " " + operator + " " + num2 + " is " + numResult);
        break;
    case "*":
        numResult = num1 * num2;
        alert(num1 + " " + operator + " " + num2 + " is " + numResult);
        break;
    case "/":
        numResult = num1 / num2;
        alert(num1 + " " + operator + " " + num2 + " is " + numResult);
        break;
    case "%":
        numResult = num1 % num2;
        alert(num1 + " " + operator + " " + num2 + " is " + numResult);
        break;
    default:
        alert("Invalid operator");
  } 

// Exercise # 8

var time = prompt("Please enter time in 24 hours format like 1900 = 7pm");

if (time.length == 4){
    if (time >= 0000 && time < 1200){
        alert("Good morning!");
    }
    else if(time >= 1200 && time < 1700){
        alert("Good afternoon!");
    }
    else if(time >= 1700 && time < 2100){
        alert("Good evening!");
    }
    else if(time >= 2100 && time <= 2359){
        alert("Good night!");
    }
}
else{
    alert("Please enter time in correct format")
}

// Exercise # 9

var year = prompt('Enter a year (format must be YYYY)');

let leap = new Date(year, 1, 29).getDate() === 29;

if (year.length == 4){
    if (leap){
        alert(year + " is a leap year");
    }
    else{
        alert(year + " is not a leap year");
    }
}
else{
    alert("Please enter year in correct format")
}

// Exercise # 10

var inputPassword;
const savePassword = "p4ssw0rd";

do {
    inputPassword = prompt("Please enter the password");
} while (inputPassword.length == 0);

if (inputPassword === savePassword){
    alert("Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect password");
}

// Exercise # 11

var firstName = "Ahsan";

if (firstName === "Rizwan") {
    document.write("Hello Rizwan!");
}
else{
    document.write("You are not Rizwan");
}

// Exercise # 12

var greeting;
var hour = 13;

if (hour < 18){
    greeting = "Good day";
}
else{
    greeting = "Good evening";
}

alert (greeting);

// Exercise # 13

var _num1 = parseInt(prompt("Please enter first number"));
var _num2 = parseInt(prompt("Please enter second number"));

if (_num1 > _num2){
    alert("The greater number of " + _num1 + " and " + _num2 + " is " + _num1 + ".");
}
else if (_num1 < _num2)
{
    alert("The greater number of " + _num1 + " and " + _num2 + " is " + _num2 + ".");
}
else{
    alert("Both numbers are equal.");
}

// Exercise # 14

var isPositiveInteger = parseInt(prompt("Please enter number to check positive or negative"));

if (isPositiveInteger > 0){
    alert(isPositiveInteger + " is a positive integer");
}
else if (isPositiveInteger < 0){
    alert(isPositiveInteger + " is a negative integer");
}
else{
    alert("The number is zero");
}

// Exercise # 15

var time1 = prompt("Please enter time in 24 hours format like 1900 = 7pm");

if (time1.length == 4){
    if (time1 >= 0600 && time1 <= 0900){
        alert("Breakfast is served.");
    }
    else if(time1 >= 1100 && time1 <= 1300){
        alert("Time for lunch.");
    }
    else if(time1 >= 1700 && time1 <= 2000){
        alert("It's dinner time.");
    }
    else{
        alert("Sorry, you'll have to wait, or go get a snack.");    
    }
}
else{
    alert("You have enter time in invalid format.");
}

// Exercise # 16


// Exercise # 17

var singleChar = prompt("Please enter single character (i.e. string of length 1)");

if (singleChar.length == 1){
    if (singleChar.toLowerCase() == "a" || singleChar.toLowerCase() == "e" || singleChar.toLowerCase() == "i" || singleChar.toLowerCase() == "o" || singleChar.toLowerCase() == "u"){
        alert("True! " + singleChar + " is vowel.");
    }
    else{
        alert("False! " + singleChar + " is not vowel.");
    }
}
else{
    alert("String length should not be greater than one.");
}

// Exercise # 18

if (10 !== 8){
    document.write("<br \><br \>True");
}

// Exercise # 19

var monthNumber = parseInt(prompt("Please enter month number"));

switch (monthNumber){
    case 1:
        alert("January");
        break;
    case 2:
        alert("February");
        break;
    case 3:
        alert("March");
        break;
    case 4:
        alert("April");
        break;
    case 5:
        alert("May");
        break;
    case 6:
        alert("June");
        break;
    case 7:
        alert("July");
        break;
    case 8:
        alert("August");
        break;
    case 9:
        alert("September");
        break;
    case 10:
        alert("October");
        break;
    case 11:
        alert("November");
        break;
    case 12:
        alert("December");
        break;
    default:
        alert("Invalid month");
        break;
}

// Exercise # 20

var inputAge  = parseInt(prompt("Please enter age"));
let voteable = inputAge < 18 ? "Too young" : "Old enough";

alert(voteable);
