// problem 2
function checkName(name){
    if(typeof name !== 'string'){
        return 'Invalid';
    }
    let lastName = name.slice(-1).toLowerCase();
  let array = ['a','e','i', 'o','u','w','y'];
  let result = false;
  for(const arr of array){
    if(arr === lastName){
        result= true;
    }

    
  }
  return result?'Good name':'Bad name';
  
}
console.log(checkName('salman'));
console.log(checkName('RAFEE'));
console.log(checkName('Jhankar'));
console.log(checkName('RAFEEA'));
console.log(checkName(133));

