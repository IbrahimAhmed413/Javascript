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
    
    for(var i = 0 ; i < shipments.length ; i++ ){
        if(select == 'standard' ){
            // var od = new Date();
            //  var  y =  od.getFullYear();
            //  var m = od.getMonth();
            //  var d = od.getDate();
            //  var orderdate = y + " "+ m + " " + d;

            //  var edd = orderdate + shipments[i].leadTime;
             console.log(shipments[i].leadTime);

        }
    }
   // // Update the div with the selected value
    // document.getElementById('selected').innerHTML = "You selected:" +select;
}