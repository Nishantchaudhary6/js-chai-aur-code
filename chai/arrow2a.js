const user={
    name:"hitesh",
    price:1000,

    welcomeMessage:function(){
        console.log(`${this.name},welcome sir`);
    }
}
// user.welcomeMessage()
user.name="sam"
// user.welcomeMessage()

// function chai(){
//     let username="nishant"
//     // this is only work in object not in function
//     console.log(this.username);
// }
// chai()

// const chai =function(){
//     let username="nishant"
//     console.log (this.username);
// }

const chai=()=>{
    let username="nishant"
    console.log(this.username)
}
chai()



// one type
const addtwonumber=(num1,num2)=>{
    return num1 + num2
}
console.log(addtwonumber(2,4));

// another type

const addtwo=(num1,num2)=>(num1+num2) 
console.log(addtwo(29,4));
