// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    
    if (currency <=0 ){
        var newObj1={};
    return newObj1;
    }
    
    if (currency>10000) {
         var newObj2 = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    return newObj2;
    }
     
    var h = Math.floor(currency /50);
    currency = currency - h*50;
    var q = Math.floor(currency /25);
    currency = currency - q*25;
    var d = Math.floor(currency /10);
    currency = currency - d*10;
    var n = Math.floor(currency /5);
    var p = currency % 5;
    var money = {};

     if (h != 0) {
      money.H = h;
     }
     if (q != 0) {
        money.Q = q;
       }
       if (d != 0) {
        money.D = d;
       }
       if (n != 0) {
        money.N = n;
       }
       if (p != 0) {
        money.P = p;
       }

       return money;
    }


   