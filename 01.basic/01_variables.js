const accountId = 1223443

let accountEmail = "vamsi@gmail.com"

var accountPassword = "123456789"

let accountState;

/*
  prefer Not to use VAR because of issues in blockscope and functional scope
*/

accountCity = "Jaipur"

//1. accountId = 30 // Not allowed -->Single line comment

//2. Now if we try to change values for remaining 3
accountEmail = "vamsivarma@gmail.com"

accountPassword = "1234567899876"

accountCity = "Hyderabad"

if(true){
    var accountPassword = "84838383"//this is the difference between them. value changes in the outer scope
    let accountEmail = "vamsi33@gmail.com"// value is not changing in the outer scope.  
}

console.log(accountId,accountEmail,accountPassword,accountCity,accountState);
// or 
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])



