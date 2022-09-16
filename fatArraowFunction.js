"use strict";

var getA=function(a){
    return a;
}
getA();

var getA=(a)=>{
    return a;
}
console.log(getA(1));

var getSquare=(a)=>{
    return a*a;
}
console.log(getSquare(4));

var a=5;
var getSquare=()=>{
    return a*a;
}
console.log(getSquare(4));

var a=5;
var getSquare=_=>{
    return a*a;
}
console.log(getSquare(4));


var x=()=>{
    this.val=2;
    setTimeout(() => {
        this.val++;
        console.log(this.val);
    }, 1);
    
};
x();

var x=function(){
    this.val=2;
    setTimeout(() => {
        this.val++;
        console.log(this.val);
    }, 1);
    
};
var print=new x();

var x=(...n)=>{
    console.log(n[0]);
};
x(1,2,3);