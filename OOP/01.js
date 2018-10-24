/***************
 Object Oriented javascript 
******************/
// var obj = {};
// var obj1 = new Object;
// console.log(obj);
// console.log(obj1);

var book = {
    name:"functional Javascript",
    author: "Micbael fogus",
    publisher: "Orilieaty",
    page: 250,
    print: function(){
        console.log(this.name,this.author);
    }
}
// console.log(book);
// book.print();

// console.log("Book name: "+book.name);
// console.log("Author Name: "+book["author"]);

// console.log("publish year: "+ book.publisherYear);
book.publisherYear = 2010;
// console.log("publish year: "+ book.publisherYear);

book['price'] = 800;
// console.log('price: '+ book.price);


for(var props in book){
    // console.log(props);
    console.log(props + '='+book[props]);
}