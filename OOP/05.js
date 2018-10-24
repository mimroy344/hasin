/*********************
Call Bind Method
******************/
// function printMe(){
//     console.log("Hello, "+this.name);
// }
// var obj1 = {
//     name: "shamim",
//     age: 22
// }
// var obj2 = {
//     name: "segufa",
//     email: "sefa@gmail.com"
// }

// printMe.call(obj1)
// printMe.call(obj2)

// var binded = printMe.bind(obj1);
// var binded = printMe.bind(obj2);

// binded()
// binded();
// printMe()


// printMe.call(obj1)
// printMe.call(obj2)


function add(a, b){
    return (a+b)*this.c;
}

var obj1 = {
    c: 3
}
var obj3 = {
    c:5
}

var result = add.call(obj1,10,5)
result

var result2 = add.apply(obj3, [10 , 3])
result2