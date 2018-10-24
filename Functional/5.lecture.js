// Higher order Function
// var arr = [4, 5, 1, 0,8];

// function cbf(a){
//     console.log(a);
// }
// arr.forEach(cbf);


function caller(){
    return function(name){
        return 'Caller Calling You '+ name;
    }
}

// var x =caller();
// var y=x('mim ');
// y;

// var z= x("Shamim hossen")
// z;
var a = caller()('Shamim Hossen');
a;