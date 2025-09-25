

function saymyname(){
console.log("F")
console.log("I")
console.log("K")
console.log("Fp")
console.log("F")
}

// saymyname()
// function addtwonumber(num1,num2){
    // console.log(num1+num2)

// }
// addtwonumber(5,9)
function addtwonumber(num1,num2){
let result =num1+num2;
return result;
}
const result=addtwonumber(8,9)
// console.log(result)
function loggin(username){
    if (!username){
        console.log("please enter the name")
        return
    }

    return `heelo ${username}`;

}
console.log(loggin())



// *************************add to cart ***********************

function calculatecartprice(...num1){
    return num1
}

console.log(calculatecartprice(100,200,7957,3646))

const user={
    name:"bhjebc",
    age:92,
}

const gud={
    name:"vhfvh",
    age:79

}

function handleObject(anyobject){
    console.log(`username is ${anyobject.name}and age is ${anyobject.age}`);
}

handleObject(user)

let myArray=[3,8,6,4,7,89,]
function returnfourthArray(any){
    return any[1]
}
console.log(returnfourthArray(myArray))