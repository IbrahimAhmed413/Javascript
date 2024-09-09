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
                'imageUrl': "https://www.mhr.pt/232729-large_default/apple-iphone-se-64gb-red.jpg"
            },
            'iphone_11_black': {
                'name': 'iPhone 11 128GB Black',
                'price': '869',
                'currency': 'EUR',
                'imageUrl': "https://assets.swappie.com/iphon11musta1-300x300.jpg"
            },
            'iphone_8_plus_silver': {
                'name': 'iPhone 8 Plus 64GB Silver',
                'price': '519',
                'currency': 'US$',
                'imageUrl': "https://www.mhr.pt/196170/apple-iphone-8-plus-64gb-silver.jpg"
            }
        };