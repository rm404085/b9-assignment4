// problem 5
function monthlySavings(arr , livingCost) {
    // You have to write your code here
    let sum = 0;
    for(const array of arr){
         if(array >= 3000){
            sum = sum+array;
            let discount = 0.2;
            let savings =livingCost - (sum + discount) ;
            return  savings;
         }
    }
    
      
}
console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400 ));
