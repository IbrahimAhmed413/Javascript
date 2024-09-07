// Reuse the function to convert Celsius to Fahrenheit made on exercise #2. But this time the celsius temperature should be informed in the input field below and the calculation done after pressing the button.
function cal() {
    var input = document.getElementById("text1").value;
    var F = input * (9 / 5) + 32;

    document.getElementById("txt2").innerHTML = F;
}

// Print in the list below the years when the World Cup of Soccer will happen from 2022 to 2050. Remember that the World Cup happens every 4 years.

let list = "<ul>";

for (var year = 2022; year <= 2050; year += 4) {
    list += '<li>' + year + '</li>'
}

list += "</u>";
document.getElementById("list").innerHTML = list;

//  Use the input fields below to inform two grades and the number of absences of a student. Follow the rules below to inform the result:
// Minimum 70% presence is required to be approved (total number of classes is 20)
// Minimum average of 6.5 is required to be approved
// If the student fails, we need to inform what was the reason (absences, insufficient grade or both.)

function cal() {

    var num1 = parseInt(document.getElementById("num").value.trim());
    var num2 = parseInt(document.getElementById("number").value.trim());
    var absen = parseInt(document.getElementById("abs").value.trim());

    var res = (num1 + num2) / 2;
    var clssesattent = (absen / 20) * 100;

    if (res >= 6.5 && clssesattent >= 70) {

        document.getElementById("stdres").innerHTML = "Approved";
    }

    else if (res < 6.5 && clssesattent < 70) {
        document.getElementById("stdres").innerHTML = "Not Approved Insufficient Grade and attendence";
    }
    else if (res < 6.5) {
        document.getElementById("stdres").innerHTML = "Not Approved Insufficient Grade ";
    }
    else if (clssesattent < 70) {
        document.getElementById("stdres").innerHTML = " Not Approved  Insufficient Attendence ";
    }
}
// Fill the html table below with the sales and print the total amount of sales in the last line. Don't include the sales that had a refund requested.

var sales = [
    { 'student': 'Jason Gomes', 'date': '10/06/2018', 'amount': 34.99, 'refundRequested': null },
    { 'student': 'Carlos Blue', 'date': '10/06/2018', 'amount': 29.99, 'refundRequested': null },
    { 'student': 'Martin Heyes', 'date': '11/06/2018', 'amount': 39.99, 'refundRequested': '13/06/2018' },
    { 'student': 'Isabella Hopkins', 'date': '11/06/2018', 'amount': 29.99, 'refundRequested': null },
    { 'student': 'Andrew Walt', 'date': '12/06/2018', 'amount': 34.99, 'refundRequested': null }
];


var table = "<table class='sales-table'>";
table += "<tr><th>Student</th><th>Date</th><th>Amount</th></tr>";
var totalAmount = 0;

for (var i = 0; i < sales.length; i++) {
    if (sales[i].refundRequested == null) {
        table += "<tr>";
        table += "<td>" + sales[i].student + "</td>";
        table += "<td>" + sales[i].date + "</td>";
        table += "<td>" + sales[i].amount + "</td>";
        table += "</tr>";
        totalAmount += sales[i].amount;
    }
}

table += "<tr ><td colspan='2'><b>Total Sold</b></td><td>" + totalAmount + "</td></tr>";
table += "</table>";

document.getElementById("div").innerHTML = table;
