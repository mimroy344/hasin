// your age to condition 
var age = 120;
var result;
if(age<=0 || age>120){
    result = 'vampire';
}else if(age<=1){
    result= 'baby';
}else if(age<=3){
    result = 'toolder';
}else if(age<=12){
    result='kid';
}else if(age<=17){
    result='teenager';
}else if(age>=18){
    result='adult';
}
console.log(result);