var shipments = 
{
    'standard': {
        'leadTime': 7,
        'fee': 2
    },
    'express': {
        'leadTime': 3,
        'fee': 4.5
    }
};

function showSelectedValue() {
    var select = document.getElementById('deliverySelect').value;

    if (select && shipments[select]) {
        // Get today's date
        var orderDate = new Date();

        // Calculate expected delivery date
        var deliveryDate = new Date();
        deliveryDate.setDate(orderDate.getDate() + shipments[select].leadTime);

        document.getElementById('orderDate').innerHTML = "Order Date: " + orderDate.toISOString().split('T')[0];
        document.getElementById('deliveryDate').innerHTML = "Expected Delivery Date: " + deliveryDate.toISOString().split('T')[0];
        document.getElementById('deliveryFee').innerHTML = "Delivery Fee: $" + shipments[select].fee.toFixed(2);
    }
}
// Qno 2

var phones = 
{
    'iphone_se_red': {
        'name': 'iPhone SE 64GB Red',
        'price': '450',
        'currency': 'US$',
        'imageUrl': "./yCautEtLv0SBDJ2lzWrkdqpXkIeKd3nymuRfsiTJ.jpeg"
    },
    'iphone_11_black': {
        'name': 'iPhone 11 128GB Black',
        'price': '869',
        'currency': 'EUR',
        'imageUrl': "",
    },
    'iphone_8_plus_silver': {
        'name': 'iPhone 8 Plus 64GB Silver',
        'price': '519',
        'currency': 'US$',
        'imageUrl': "https://www.mhr.pt/196170/https://www.pinterest.com/pin/39758409202754321/visual-search/?surfaceType=flashlight-iphone-8-plus-64gb-silver.jpg"
    }
};




function change(selectedPhone) {
    
    if (phones[selectedPhone]) {
        // Update the product image
        document.getElementById('productImage').src = phones[selectedPhone].imageUrl;
        
        // Update the product name
        document.getElementById('productName').innerHTML = "<b>Product Name: " + phones[selectedPhone].name + "</b>";
        
        // Update the product price with 2 decimal places
        document.getElementById('productPrice').innerHTML = "<b>Price: " + phones[selectedPhone].currency + " " + parseFloat(phones[selectedPhone].price).toFixed(2) + "</b>";
    }
}

// Stop watch
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false;

function startStop() {
    if (!timer) {
        timer = true;
        document.getElementById('start').innerHTML = 'Stop';  // Change button text to 'Stop'
        stopWatch();
    } else {
        timer = false;
        document.getElementById('start').innerHTML = 'Start';  // Change button text back to 'Start'
    }
}

function resetTimer() {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
    document.getElementById('start').innerHTML = 'Start';  // Reset button text to 'Start'
}

function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hrString = hour < 10 ? "0" + hour : hour;
        let minString = minute < 10 ? "0" + minute : minute;
        let secString = second < 10 ? "0" + second : second;
        let countString = count < 10 ? "0" + count : count;

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        
        setTimeout(stopWatch, 10);  // Recursion to keep the timer running
    }
}
