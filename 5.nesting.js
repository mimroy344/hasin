// 1.if nesting  --prime number
var n=11;
if(n<10){
    if(2==n||3==n||5==n||7==n){
        console.log(n,'is smaller than 10 & its prime number');
    }else{
        console.log(n,'is smaller than 10 & its not a prime number');
    }
}else if(n==10){
    console.log(n,'is equal to 10');
}
else{
    console.log(n,'is greater than 10');
}

// 2.positive & negative number
var n=0;
if(n>0){
    console.log(n,'is positive number');
}else if(n==0){
    console.log(n,'is natural number');
}
else{
    console.log(n,'is negative number');
}

// 3.even & odd 
var n=7;
var remainder = n%2;
if(0==remainder){
    console.log(n,'is even number');
}else{
    console.log(n,'is odd number');
}