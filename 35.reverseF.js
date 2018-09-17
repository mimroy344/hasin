// reverse function
function reverseString(data){
    var reverseString=data.split('').reverse().join('');
    return reverseString;
}


var sentense ='Hello World';
var sentense2 ='Hello guys';
var reverseSentense = reverseString(sentense);
var reverseSentense2 = reverseString(sentense2);
console.log(reverseSentense,reverseSentense2);
