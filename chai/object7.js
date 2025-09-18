 const mySym =Symbol("key1")



const jsuser={
    name:"nishant",
    age:18,
    [mySym]:"mykey1",
    location:"delhi",
    isloggedin:false,
}
// console.log(jsuser["name"])
// console.log(jsuser[mySym] )
jsuser.name="jayant"

//    Object.freeze(jsuser)
   jsuser.name="kaalo"
//    console.log(jsuser)
   jsuser.greetings=function(){
         console.log("heelo js user ")  
   }
console.log(jsuser.greetings())
jsuser.greeting2=function(){
    console.log(`hello js user ${this.name}`)
}
console.log(jsuser.greeting2())


// *************************object2********************
