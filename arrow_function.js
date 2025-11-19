
// this keyword related code 

const user = {
 userName : "Usaid",
 price:1000,

 welcomeMessage: function(){
    console.log(`${this.userName} welcome to website`);// this keyword replace current context
    // console.log(this); // this current context ki bat karta han 
    
    
 }
}
// user.welcomeMessage()
user.userName="ali"
user.welcomeMessage()

//arrow function code 

// const addNum = (num1, num2) => {   // Yea hamara basic arrow function //implcitu
//    return num1 + num2
// }

const addNum = (num1,num2)=>(num1+num2)  // is parentsis remove karinaga tu humko return keyword use kara nhi paraga //expilcity
const addTwo = (num1,num2)=>({usernamr:"usaid"}) // agr is ma parentsis na lgaya tu value undied ati 

console.log( addTwo(3,4));

