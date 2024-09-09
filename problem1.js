//problem 1

function calculateMoney(ticketSale){
    if(ticketSale < 0 || typeof ticketSale !== 'number'){
        return "Invalid ticket"
    }
    let ticketAmount =( 120*ticketSale )-(500+(8*50));
    return ticketAmount;
}

console.log(calculateMoney(10)); // Expected output: 2000
console.log(calculateMoney(1055)); // Expected output: 2000
console.log(calculateMoney(93)); // Expected output: 2000
console.log(calculateMoney("jdkl"));
console.log(calculateMoney(-130)); // Expected output: 2000