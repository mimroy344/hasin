// calendar 
var monthName='September,2018';
var days = 30;
var startingDay=6;

console.log('\n\n Calendar of',monthName,'\n');
console.log('Sun  Mon  Thu  Wed  Thu  Fri  Sat');

for(var i=0;i<=5;i++){
    var dayRow = '';
    for(var j=1;j<=7;j++){
        var currentDay = 7*i+j-startingDay;

        if(currentDay>days){
            break;
        }else if(currentDay<1){
            currentDay=' ';
        }

        if(currentDay>9){
            dayRow+=currentDay+'   '
        }else{
            dayRow+= currentDay + '    ';
        }
    }
    console.log(dayRow);
}

