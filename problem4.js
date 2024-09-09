// problem 4
function password(obj) {
    //write your code here
    if(obj.siteName ===undefined || obj.name === undefined || obj.birthYear === undefined || obj.birthYear.toString().length !== 4){
        return "Invalids";
    }
    let capitalized = obj.siteName[0].toUpperCase()+ obj.siteName.slice(1);
    let passwordString = capitalized + '#' + obj.name + '@' + obj.birthYear;
    return passwordString;
}
console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" } ));
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" } ))
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" } ))
console.log(password({ name: "maisha", birthYear: 2002 } ))