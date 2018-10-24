/*********************
New
******************/
function Animal(name){
    this.name = name
}
Animal.prototype.printName = function(){
    console.log(this.name);
}
function myNew(constructor){
    var obj = {}
    Object.setPrototypeOf(obj,constructor.prototype)
    var argsArr = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, argsArr.slice(1))
    return obj;
}

var cat =myNew(Animal, "cat")
cat.printName()
// var cat = myNew(Animal)
// var cat = new Animal("Cat")
// var dog = new Animal("Dog")
// cat.printName()