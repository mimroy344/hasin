// function with parametar default value
function sayHi(name = 'Annonymous',age='unknown'){
        console.log('Hello '+name+' ,you are '+age+'years old');
}

sayHi('shamim',20);
sayHi('mim',21);
sayHi('','');
sayHi();
sayHi();
