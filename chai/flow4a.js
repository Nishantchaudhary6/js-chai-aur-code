const userlogin=true
const debitcard=true
googlelogin=true
emaillogin=false
if (userlogin&debitcard)
{
    console.log("done")
}
if (googlelogin||emaillogin){
    console.log("login")
}
const month=8

switch (month){
    case 1: console.log("jan");
    break;
    case 2: console.log("feb");
    break;
    case 3: console.log("mar");
    break;
    case 4: console.log("apr");
    break;
    case 5: console.log("may");
    break;

    default:console.log("no month");
    break;
}


// falsy value  -false,0,-0,big int  on,null,undefine,nan,""
// truthy value  "0",'false',"",{},[],function(){}


const emptyObject={}
if (Object.keys(emptyObject).length===0){
    console.log("empty object")
}

// nulish coalesing operator
let val1;
// val1 =1 ??10
// val1 =null??100
val1 = undefined?? 199
console.log(val1)
// ternary operator 
const icecoffe=100
icecoffe<=80 ? console.log("less than"):console.log("greter")