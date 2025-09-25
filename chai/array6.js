const myarr=[0,2,5,6,8]
console.log(myarr[4])
const heros=["nishant","chaudhary","iron","nan"]
const arr2=new Array(2,6,8,3)
console.log(heros[2])
myarr.push(9)
  
myarr.push(18)
 myarr.pop()  //  simple delet the last element   

 myarr.shift()//delete the first element
myarr.unshift(8)    //enter in the first index
console.log(myarr)
const newarr=myarr.join()
// console.log(newarr)


console.log("A  ",myarr)
const myn1 = myarr.slice(1,3)
// console.log(myn1)
// console.log("B", myarr)
const myn2=myarr.splice(1,3)

// console.log("c",myn2)
// console.log(myn2)



const marvel=["ironman","thhor","hulk"]
const dc =["superman","flash","batman"]

// marvel.push(dc)

// console.log(marvel) 
// const all=marvel.concat(dc)     old metheod
const all=[...marvel,...dc]

// console.log(all)

const another=[1,24,[5,6,7,8],[95,2,[5,7,3,46,7]]]
const realanother=another.flat(Infinity)
console.log(realanother)

// console.log(Array.from({name:"hitesh"}))//interesting

let scorea =50
let scoreb=100
console.log(Array.of(scorea,scoreb))




