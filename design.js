// Ans1:-



// this inside global scope



// this inside an object



// this inside a method 



// this can be used in function



// this can be used in inner function 



// this can be used in call and bind function



// this can be used in Using Arrow functions





// this can be used in constructor



// this can be used in inside a prototype



// this can be used in inside a class





// Ans:-2



// this inside global scope



// this.garage={

//     table:'garage table'

// };

// console.log(this.garage.table);





// this inside an object



// let johnsRoom={

//     table:'johns table'

// }



// // console.log(this.johnsRoomtable.table);





// this inside a method 



// this.garage={

//     table:'garage table',

//     cleanTable(){

//         console.log(`cleaning ${this.table}`)

//     }

// };

// this.garage.cleanTable();



// this can be used in function



// const cleanTable=function(soap){

//     console.log(`cleaning ${this.table} using ${soap}`);

// };

// cleanTable('some soap');







// this can be used in inner function 



// const cleanTable=function(soap){

//     let that=this;

//     const innerFunction=function(_soap){

//         console.log(`cleaning ${that.table} using ${_soap}`);

//     }

//     innerFunction(soap);

// };



// this can be used in call and bind function



// this.table='window table';



// const cleanTable=function(soap){

//     const innerFunction=function(_soap){

//         console.log(`cleaning ${this.table} using ${_soap}`);

//     }

//     innerFunction.call(this,soap);

// };



// this.garage={

//     table:'garage table'

// }





// let johnsRoom={

//     table:'johns table'

// }

// cleanTable.call(this,'some soap');

// cleanTable.call(this.garage,'some soap');

// cleanTable.call(johnsRoom,'some soap');

// cleanTable.bind(this)('some soap');





// this can be used in Using Arrow functions



// const cleanTable=function(soap){

//     const innerFunction=(_soap)=>{

//         console.log(`cleaning ${this.table} using ${_soap}`);

//     }

//     innerFunction(soap);

// };





// this can be used in constructor





// const cleanTable=function(soap){

//     console.log(`cleaning ${this.table} using ${soap}`);

// }





// const jillsRoom =new createRoom('jill');

// const johnRoom =new createRoom('john');



// cleanTable.call(johnRoom,'some soap');

// cleanTable.call(jillsRoom,'some soap');





// this can be used in inside a prototype



// createRoom.prototype.cleanTable=function(soap){

//         console.log(`cleaning ${this.table} using ${soap}`);

//     }





// this can be used in inside a class



// class createRoom{

//     constructor(name){

//         this.table=`${name}s table`

//     }

//     cleanTable (soap){

//         console.log(`cleaning ${this.table} using ${soap}`)

//     }

// }



// const jillsRoom =new createRoom('jill');

// const johnRoom =new createRoom('john');



// jillsRoom.cleanTable('some soap');

// johnRoom.cleanTable('some soap');





// Ans3:-



// class Student{

//     constructor(name,age,phone_number,board_marks){

//         this.age=age;

//         this.phone_number=phone_number;

//         this.board_marks=board_marks;

//     }

// }



// Ans4:-

// let Student=function(marks){

//     this.marks=marks;

//     if (this.marks>=40) {

//         console.log(`${this.marks} is eligible`)

//     }else{

//         console.log(`${this.marks} is not eligible`)

//     }

// }

// Student(39);





// Ans5:-



// class Student{

//     constructor(name,age,phone_number,board_marks){

//         this.age=age;

//         this.phone_number=phone_number;

//         this.board_marks=board_marks;

//     }

// }



// const tauheed =new Student('Tauheed',23,9997287779,99);

// const sohail =new Student('sohail',25,9037532339,45);

// const tazeem =new Student('tazeem',22,9037234539,43);

// const farhan =new Student('farhan',21,903753234249,34);

// const adil =new Student('adil',24,349037539,59);





// Ans6:-





// class Student{

//     static count=0;

//     constructor(name,age,phone_number,board_marks){

//         this.name=name;

//         this.age=age;

//         this.phone_number=phone_number;

//         this.board_marks=board_marks; 

//         // Student.printInfo();

//         Student.countStudent();

//     }

//     // printInfo(){

//     //     console.log(`name-${this.name} age- ${this.age} phone_number- ${this.phone_number} board_marks- ${this.board_marks} `);

//     // }



//       static countStudent() {

//     return Student.count++; 

//   }



//     eligible=function(){

//     if (this.board_marks>=40) {

//         console.log(`${this.name}'s marks is ${this.board_marks}  and is eligible`)

//     }else{

//         console.log(`${this.name}'s marks is ${this.board_marks}  and is is not eligible`)

//     }

// }

// }



// const tauheed =new Student('Tauheed',23,9997287779,49);

// const sohail =new Student('sohail',25,9037532339,25);

// const tazeem =new Student('tazeem',22,9037234539,13);

// const farhan =new Student('farhan',21,903753234249,54);

// const adil =new Student('adil',24,349037539,09);



// // tauheed.printInfo();



// console.log(Student.countStudent());



// tauheed.eligible();



// sohail.eligible();



// tazeem.eligible();



// farhan.eligible();



// adil.eligible();







// class student {
//   static count = 0; //static variable to call

//   constructor(name, age, ph_no, marks) {
//     this.name = name;

//     this.age = age;

//     this.ph_no = ph_no;

//     this.marks = marks;

//     student.countStudent();
//   }

//   static countStudent() {
//     return student.count++; //this is how u access static variable
//   }

//   eligible() {
//     if (this.marks >= 40) {
//       console.log(`${this.name} age ${this.age} is eligible`);
//     } else if (this.marks < 40) {
//       console.log(`${this.name} age ${this.age} is not eligible`);
//     }
//   }
// }

// const Riya = new student("Riya", 18, 1234, 34);

// const Hiya = new student("Hiya", 15, 2345, 35);

// const Diya = new student("Diya", 16, 4567, 60);

// const Siya = new student("Siya", 17, 7891, 70);

// const Rooh = new student("Rooh", 19, 3456, 80);

// console.log(student.countStudent());

// Riya.eligible();

// Hiya.eligible();

// Diya.eligible();

// Siya.eligible();

// Rooh.eligible();



// "use strict";

// var getA=function(a){
//     return a;
// }
// getA();

// var getA=(a)=>{
//     return a;
// }
// console.log(getA(1));

// var getSquare=(a)=>{
//     return a*a;
// }
// console.log(getSquare(4));

// var a=5;
// var getSquare=()=>{
//     return a*a;
// }
// console.log(getSquare(4));

// var a=5;
// var getSquare=_=>{
//     return a*a;
// }
// console.log(getSquare(4));


// var x=()=>{
//     this.val=2;
//     setTimeout(() => {
//         this.val++;
//         console.log(this.val);
//     }, 1);
    
// };
// x();

// var x=function(){
//     this.val=2;
//     setTimeout(() => {
//         this.val++;
//         console.log(this.val);
//     }, 1);
    
// };
// var print=new x();

// var x=(...n)=>{
//     console.log(n[0]);
// };
// x(1,2,3);


// Answer 2

class Student{

    constructor(name,age,marks){
        this.name=name;

        this.age=age;

        this.marks=marks;

    }

    placementsAge(minAge){
        return (minMarks)=>{
            if (this.marks>minMarks && this.age>minAge) {
                console.log(this.name+' is ready for the placements');
            }
            else{
                console.log(this.name+' is not ready for the placements');
            }
        }
    }
}
const tauheed=new Student('Tauheed',23,99);
const adil=new Student('adil',26,49);

tauheed.placementsAge(18)(40);
adil.placementsAge(29)(40);