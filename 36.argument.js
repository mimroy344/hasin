// hoisting
// spread operator
var students = [];

console.log(students.length);
addStudents(students,'Rahim','Karim','Rahima');
console.log(students.length);
addStudents(students,'Shamim');
console.log(students.length);
addStudents(students,'shamim','Shamim');
console.log(students.length);

function addStudents(storage,...people){
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