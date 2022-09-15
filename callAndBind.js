var obj={
    num:2
};

var addList=function(a,b,c,d){
    return this.num+a+b+c+d;
};
console.log(addList.call(obj,1,2,3,1));