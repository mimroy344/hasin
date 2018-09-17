//shallow copy
//deep copy
var list=[
    'sun', //0 =-7 
    'mon', //1 =-6
    'tue', //2 =-5
    'wed', //3 =-4
    'thu', //4 =-3 
    'fri', //5 =-2
    'sat', //6 =-1
];
// array copy
// var list2=list;
// list2[1]='no';
// console.log(list);
// console.log(list2);

// deep copy problem solution with  method
// var list2=list.slice();
// var list2=[...list];
// var list2= Array.from(list);
list2[2]=3;
console.log(list,list2);

// variable copy
// var v1=1;
// var v2=v1;//shallow copy
// v2=2;
// console.log(v1,v2);
