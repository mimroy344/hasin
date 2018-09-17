// pramiter & argument
var students = [];

console.log(students.length);
addStudents(students,'Rahim','Karim','Rahima');//argument
console.log(students.length);
addStudents(students,'Shamim');//argument
console.log(students.length);
addStudents(students,'shamim','Shamim');//argument
console.log(students.length);

function addStudents(storage,...people){//pramiter
    for (i=0;i<people.length;i++){
        storage.push(people[i]);
    }
}






// // multiple paramiters
// function dummy(n,m,...params){
//    console.log(params.length);
//    console.log(params);
//     console.log(params[1]);
// }
// dummy(1,8,3,4);
// dummy(1,7,3,4,5);
// dummy(1,6,35,23)