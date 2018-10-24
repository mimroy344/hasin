/*********************
Prototype
******************/
// function Person(){
//     this.name = "Twhinkle Cats"
// }
// function Teacher(){
//     Person.call(this)
//     this.subject = "Javacript"
// }
// var teacher = new Teacher()
// var name = teacher.name
// console.log(name);


// function Person(name){
//     this.name = name;
// }
// Person.prototype.printName = function(){
//     console.log("Name: "+ this.name);
// }
// Person.prototype.another = function(){
//     console.log("This is another Person");
// }
// function Student(name, id){
//     Person.call(this,name)
//     this.id = id;
// }
// Student.prototype = Object.create(Person.prototype)
// Student.prototype.constructor = Student;
// var student = new Student("segufa",111)




// function Person(name){
//     this.name = name;
// }
// Person.prototype.printName = function(){
//     console.log("Name: "+ this.name);
// }
// Person.prototype.another = function(){
//     console.log("This is another Person");
// }
// function Student(name, id){
//     Person.call(this,name)
//     this.id = id;
// }
// Student.prototype = Object.create(Person.prototype)
// // Object.setPrototypeOf(Student.prototype , Person.prototype)

// Student.prototype.constructor = Student;
// var student = new Student("segufa",111)

// Person.prototype.printName = function(){
//     console.log(this.name+"Not copied");
// }
// student.printName()

// Person.prototype.skill = "javascript"