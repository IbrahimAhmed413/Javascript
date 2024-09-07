// Write a function that returns the square of a number

function returnsqaure(a) {
    var result = a * a;
    return result;
}
console.log(returnsqaure(2));

//  Write a function to convert Celsius to Fahrenheit
function celtoferenheight(C) {
    var F = (9 / 5 * C) + 32;
    return F;
}

console.log(celtoferenheight(2));

// Write a function to find the area and perimeter of a Circle
function area(r) {
    var pi = Math.PI;
    var result = pi * (r * r);
    return result;
}
console.log(area(7));

function perimeter(r) {
    var result = 2 * Math.PI * r;
    return result;
}
console.log(perimeter(5))

function lastelement(arr) {
    for (var i = 0; i < arr.length; i++) {
        result = arr.length - 1;
    }
    return result;

}
console.log(lastelement([1, 2, 4, 5, 6, 7]));

// SUm of array
function sum(arr) {
    var result=0;
    for (var i = 0; i < arr.length; i++) {
        result =result+ arr[i];
    }
    return result;
}
console.log(sum([1, 2, 3, 4, 5, 5]));

// product of array
function product(arr = []) {
    for (var i = 0; i < arr.length; i++) {
        result *= arr[i];
    }
    return result;
}
console.log(product[1, 2, 4]);

// // There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
console.log("___________________________")
var array1 = [2,4,6,8,10];
var array2 = [1,3,5,7,9];

for (var i = 0; i < array1 ; i++){
    for(var j = 0 ; j < array2 ; j++){
        var result = arr[i] + arr[j];
    }
    console.log(result);
}

