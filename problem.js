// problem 5
function monthlySavings(arr , livingCost) {
    // You have to write your code here
    if(Array.isArray(arr)===false || typeof arr!=="number"){
        return "Invalid input";
    }
    let totalCost = 0;
    for(const array of arr){
        if(array >=3000){
            totalCost = array * 0.2;

        }
    
          totalCost += array;
          
        
         }
         return totalCost;
         
    }
    
      

console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400 ));
