// 1.comparison operator --smaller or greater
var n=31;
var m=3;
if(n>m){
    console.log(n,'is greater than ',m);
}else if(n==m){
    console.log(n,'is equal to',m);
}else{
    console.log(n,'is smaller than',m);
}

// 2.if conditional statement --jamal&Kamal nesting
var personOne='Jamal';
var personTwo='Kamal';
var areTheyBrother=true;
// if('Jamal'==personOne){
//     if('Kamal'==personTwo){
//         if(areTheyBrother){
//             console.log('They are brother');
//         }else{
//             console.log('They are not brother');
//         }
//     }
// }

// 3.if multiple statement check--they are brother
if('Jamal'==personOne && 'Kamal'==personTwo && areTheyBrother){
    console.log('They are brother');
}else{
    console.log('They are not brother');
}
