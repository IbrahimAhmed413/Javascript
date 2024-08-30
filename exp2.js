var firstvalue = document.getElementById("fd").innerText;
var secondvalue = document.getElementById("sd").innerText;
var thirdvalue = document.getElementById("td").innerText;

function formula(C) {
    var F = (9 * C / 5) + 32;
    return F;
}

var firstresult = formula(firstvalue);
var secondresult = formula(secondvalue);
var thirdresult = formula(thirdvalue);

document.getElementById("frd").innerHTML = firstresult;
document.getElementById("srd").innerHTML = secondresult;
document.getElementById("trd").innerHTML = thirdresult;

// Second Question
var classification = ["John Hill", "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green"];
document.getElementById("std").innerHTML = classification[3] + '<br> ' + classification[4] + '<br> ' + classification[5];

//Third Question
var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
}

function percentage(marks) {
    var result = (marks / 557) * 100;
    return Math.round(result);
}
var a = percentage(420);

document.getElementById("crs").innerHTML = course.title;
document.getElementById("crr").innerHTML = course.categories[0];
document.getElementById("per").innerHTML = a;

// Q4
var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];
var lastitem = shoppingList.pop();
shoppingList.unshift(lastitem);
shoppingList.push("cheese");
shoppingList.push("eggs");
console.log(shoppingList);