// for (let index=0;index<=10;index++){
    // console.log(index)
    // if (index ==5){
        // console.log("5 is best")
    // }
// }

let myArr=["superman","batman","saktiman"]

for (let index=0;index<myArr.length;index++)
{
    const element=myArr[index];
    console.log(element);
}

for (let index=0;index<=20;index++){
    if (index==5){
        console.log("5 is best")
        break;
    }
    console.log(index)
}
let heroArray=["batman","kjagg","superman"]

let arr=0
while(arr<Array.length){
    console.log(`my heroes are ${heroArray}`);
    arr=arr+1
}