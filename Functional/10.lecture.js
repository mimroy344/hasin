// forEach
// var arr=[1,2,3,4,5];
// arr.forEach(function(element, index,arr){
//     console.log('Element is ='+element+'index='+index+'arr='+arr);
// });


var arr=[5,9,1,2,3,4,5];
function loop(arr, callback){
    for (var i=0;i<arr.length;i++){
    callback(arr[i],i);        
    }
}
loop(arr,function(element,i){
    console.log('Element is '+ element+'index ='+i);
    
});