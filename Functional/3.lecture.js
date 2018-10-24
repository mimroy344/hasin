// inner function
// function outer(){
//     var a=10;

//     function inner(){
//     a;
//         console.log('I am Inner Function');
//     }
//     inner();
//     console.log('I am Outer Function');
// }
// outer();



// 
function add(a, b){
    function sum(){
        return a+b;
    }
    function sub(){
        return a-b;
    }
    function div(){
        return a/b;
    }
    function mul(){
        return a*b;
    }

    return sum()+sub()+div()+mul();

}

var result =add (10,5);
console.log(result);
