/*********************
  This Keyword
******************/
var obj = {
    name: "Shamim",
    print: function(){
        console.log(this);
    }
}
obj.print()

function myFunc(){
    function inner(){
        console.log(this);
    }
    new inner()
}
myFunc();

var person = {
    name:"Shamim",
    print: function(){
        console.log(this);
        console.log("Hello, "+this.name);
    }
}
person.print()

var myName = person.name()
console.log(myName);

var myPrint = function(){
    console.log(this);
    console.log("Hello, "+this.name);
}
myPrint();
console.log(myPrint);


function add(num){
    console.log(this);
    return this.value +num;
}
var obj = {
    value:10
}
var obj2 = {
    value:50
}
var binded  = add.bind(obj)
var result = binded(40)
result


function add(num){
    console.log(this);
    return this.value +num;
}
var obj = {
    value:30
}
var binded = add.binded(obj)
var result = binded(100)
console.log(result);


var person = {
    name: "shamim",
    print: function(){
        var name = this.name;
        setTimeout(function(){
            console.log("Hello, "+this.name);
        }.bind(this), 2000);
    }
}