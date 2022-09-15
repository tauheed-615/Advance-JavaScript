// var obj={
//     num:2
// };

// var addList=function(a,b,c,d){
//     return this.num+a+b+c+d;
// };
// // console.log(addList.call(obj,1,2,3,1));


// let arr=[1,2,3,1];
// console.log(addList.apply(obj,arr));


// var obj={
//     num:2
// };

// var addList=function(a,b,c,d){
//     return this.num+a+b+c+d;
// };
// let arr=[1,2,3,1];

// var bound=addList.bind(obj);
// console.log(bound(arr));

// let Student={age:20}

// let printAge = function age() {
//       return this.age
// }

// let e = printAge.bind(Student)
// console.log(e())



let multiply=function(x,y){
    console.log(x*y);
}


let multiplyByTwo=multiply.bind(this,2,3);
multiplyByTwo(3,4);
let multiply=function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByTwo=multiply(2);
multiplyByTwo(5);
