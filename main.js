// Write your JavaScript here
document.getElementById('calculate-change').addEventListener("click", 

function customerChange() {
    var customerTotal = (document.getElementById('amount-due').value);
    var receivedAmount = (document.getElementById('amount-received').value);
    var totalChange = 100 * (receivedAmount - customerTotal);
    document.getElementById('changeDue').innerHTML = '$ ' + (totalChange / 100).toFixed(2);
        if (totalChange >= 100) {
        document.getElementById('dollars-output').innerHTML = Math.floor(totalChange / 100);
        totalChange =  totalChange % 100;
        } else{
        document.getElementById('dollars-output').innerHTML = 0;
        }
        if (totalChange >= 25) {
        document.getElementById('quarters-output').innerHTML = Math.floor(totalChange / 25);
        totalChange = totalChange % 25;
        } else {
        document.getElementById('quarters-output').innerHTML = 0;
        }
        if (totalChange >= 10) {
        document.getElementById('dimes-output').innerHTML = Math.floor(totalChange  / 10);
        totalChange = totalChange % 10;
        } else {
        document.getElementById('dimes-output').innerHTML = 0;
        }
        if (totalChange >= 5) {
        document.getElementById('nickels-output').innerHTML = Math.floor(totalChange  / 5);
        totalChange = totalChange % 5;
        } else {
        document.getElementById('nickels-output').innerHTML = 0;
        }
        if (totalChange >= 1) {
        document.getElementById('pennies-output').innerHTML = Math.round(totalChange  / 1);
        } else {
        document.getElementById('pennies-output').innerHTML = 0;
        } 
       
});