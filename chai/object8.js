const tinderuser={
    tinderuserid:"nishant",
    age:16,
    fullname:{
        firstname:"nishant",
        lastname:"chaudhary",

    }
    
    
}
// console.log(tinderuser.fullname.lastname) 
const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"g",6:"z"}
// const obj3={obj1,obj2}
 
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
// console.log(obj3)

// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))
// console.log(tinderuser.hasOwnProperty("isloggedin"))
const course={
    coursename:"nishant",
    price:175634,
    courseinstructor:"maohk"
}
const {coursename:name}= course
console.log(name)