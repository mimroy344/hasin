/* ********** pure function**************/

function sayName(name){
    return 'Hello,'+name;
}

// 1.a fucntion can be stored in a variable

var hello =sayName;//function er reference pass hocce
var fun =sayName('mim');//function k call kora hocce

console.log(hello); 
console.log(fun);

var anotherHello=hello;

// 2.a function can be store in an array
var arr =[1, 2, 3, anotherHello];
arr.push(sayName);
console.log(arr);

// 3.a function can be store as an object field or property

var person ={
    name:'Shamim',
    sayName:hello,
    print:function(){
        console.log(hi);
    }
}
console.log(person);

person

// 4.we can create function as needed
var sum =10 + (function(){return 20})();
sum;

// 5.we can pass function as an arguments
function wow(name,fun){
    return fun(name);
}
var result =wow('mim',sayName);
console.log(result);

// 6.we can return function from another function

function base(b){
    return function(n){
        var result=1;
        for( var i=0;i<b;i++){
            result *=n;
        }
        return result;
    }
}

// var power = base(3);
// var result =power(10);
// result; 

var result = base(3)(5);
result 