// return a function from another function
// function host(){
//     console.log('i am host function');
//     function child(){
//         console.log('i am chield');
//     }
//     return child;
// }
// var a=host();
// a();
/************************* */
// function host(){
//     console.log('i am host function');
//     return function(){
//         console.log('i am chield');
//     }
// }
// var a=host();
// console.log(a());
/* ************************************* */
// example
function greeting(msg){

    return function(name){
        console.log(msg+' '+name);
        
    }
}
var good=greeting('Good Morning');
var hello =greeting('Hello');
hello('Shamim Hossen');
good('Mim');