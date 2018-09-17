// scope of variable
// var i = 12;
// function doSomething(){
//    i = 10;
//     console.log('inside Function',i);
//     // var i;//hoisting
// }
// doSomething();
// console.log('Outside Function',i);

// varible scope in conditional statement
var i=12;
function doSomething(){
    var i=19;
    if(true){
        var i=13;
    }
    console.log('inside Function',i);
}
doSomething();
console.log('Outside Function',i);

