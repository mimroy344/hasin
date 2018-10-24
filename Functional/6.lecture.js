// callback

// function hello(name){
//     print(name);
//     print('something else');
// }
// function print(args){
//     console.log(args);
// }
// hello('Twinkle cats');


// 
// function hello(name, print){
//     print(name);
// }

// hello('Shamim Hossen',print)
// function print(args){
//     console.log(args);
// }

// hello('Shamim', function(name){
//     console.log('Hello '+ name);
// });

// hello('Shamim',function(name){
//     console.log('Hi, How are you '+ name+ '?');
// });

// hello('Shamim Hossen', function(name){
//     console.log('Length of '+ name + 'is = '+ name.length);
// });


// var me = {
//     name: 'Shamim Hossen',
//     age:21,
//     email:'shamimrejone@gmail.com'
// }

// function printMySelf(person, callback){
//     console.log('Person: '+person.name + '('+ person.age + ')');
//     if(person.age>=18){
//         callback(person.email);
//     }else{
//         console.log('You are too little...');
//     }
// }

// printMySelf(me, function(email){
//     console.log('Email sent to '+ email);    
// })


function print(data, callback1, callback2){
    console.log('Original Data: '+data);
    callback1(data);
    callback2(data);
}

print('Twinkle Cats is Good', function(data){
    var data = data.toUpperCase();
    console.log('UpperCase:'+data);
}, function(data){
    var data = data.toLowerCase();
    console.log('LowerCase:',data);
    console.log('Length:'+data.length);
});

