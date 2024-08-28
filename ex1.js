console.log("-----------Q.no1--------------");
console.log("this is ex1.js");
console.log("------------------------------");

var firstName = 'Ibrahim';
var lastName = 'Ahmed';
var dob = 2001;
var date = new Date();
var y = date.getFullYear();
var age = y - dob;
document.getElementById("student_msg").innerHTML = "Hi, my name is" + ' ' + firstName + " " + lastName + " I'm " + age + "years old and I'm learning Javascript.";
// __________________________________________________________

var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;

var result = num1 / num2;
document.getElementById("num3").value = result.toFixed(2);
// _________________________________________________________
console.log("-----------Q.no5--------------");
var exp_result = 32 ** 6;
console.log(exp_result);
console.log("------------------------------");
// ______________________________________________________

console.log("-----------Q.no4--------------");
var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;
if (
    phone1.length > 9
) { console.log("Phone1 is Invalid"); }
else{
    console.log("phone1 is valid")
}
if (
    phone2.length > 9
) { console.log("Phone2 is Invalid"); }
else{
    console.log("phone2 is valid")
}
if (
    toString(phone3).length > 9
) { console.log("Phone3 is Invalid"); }
else{
    console.log("phone3 is valid")
}
console.log("------------------------------");
// // _________________________________________
// QNO6
// a) var NAME;
// Valid: Variable names can be in uppercase or lowercase letters.

// b) var $num1;
// Valid: Variable names can start with a dollar sign $.

// c) var typeof;
// Invalid: typeof is a reserved keyword in JavaScript, so it cannot be used as a variable name.

// d) var first-name;
// Invalid: Hyphens - are not allowed in variable names because they are interpreted as the subtraction operator.

// e) var attempt_2;
// Valid: Underscores _ are allowed in variable names.

// f) var 2ndAttempt;
// Invalid: Variable names cannot start with a digit.

// g) var full name;
// Invalid: Variable names cannot contain spaces. If you need a space-like separation, use camelCase (fullName), underscores (full_name), or PascalCase (FullName).
console.log("---------Q.no7---------")
var quantity = "25";
var number = 6;
var pressure;
var temperature = null;

console.log(quantity += quantity); 
console.log( (7+5) / number + 2 ); 
console.log(pressure); 
console.log(temperature); 
console.log(typeof pressure); 
console.log(typeof temperature);
console.log("------------------------------")
// _______________________________________________

var url = document.getElementById("urls").innerHTML;
var replace = url.replace("www.udemy.com" , "https//www.udemy.com");
document.getElementById("urlcon").innerHTML = replace;

var url2 = document.getElementById("urls2").innerHTML;
var replace2 = url2.replace("https://www.google.com" , "www.google.com");
document.getElementById("urlconvert").innerHTML = replace2;