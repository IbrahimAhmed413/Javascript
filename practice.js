// Write a function that returns the square of a number

function returnsqaure (a){
    var result = a * a;
    return result;
}
console.log(returnsqaure(2));

//  Write a function to convert Celsius to Fahrenheit
function celtoferenheight( C ){
 var   F = (9/5 * C) + 32 ;
 return F;
}

console.log(celtoferenheight(2));

// Write a function to find the area and perimeter of a Circle
function area (r){
    var pi = Math.PI;
    var result = pi * (r*r) ;
    return result;
}
function perimeter (r){
    var result = 2 * Math.PI * r;
    return result;
}
function lastelement(arr=[]){
    for(var i = 0 ; i<arr.length ; i++){
        result = arr[arr.length-1];
    }
    return result;
}
// SUm of array
function sum(arr=[]){
    for(var i = 0 ; i < arr.length ; i++ )
     {
        result += arr[i]; 
     }
     return result;

}
// product of array
function product(arr=[]){
    for(var i = 0 ; i < arr.length ; i++ )
     {
        result *= arr[i]; 
     }
     return result;

}
