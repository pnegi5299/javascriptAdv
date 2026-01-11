//? This

// The this keyword refers top different object depending on how it is used.

// 1 In an object method this refers to the object.
// 2 Alone, this refers to the global object
// 3 In a function, this refers to the global object.
// 4 In a function , in strict mode , this is undefined .
// 5 In an event , this refers to the element that received the event.
// 6 Methods like call() , apply(, and bind() can refer this to any object.


const obj={
    name:'kodifier',
    greet: function(){
        console.log(this);
        
    }
};

obj.greet();


//METHOS SHORTHAND

// In this example the greet method is defined using the "method shorthand" syntax

const obj1 ={
    name:'kodifier',
    greet(){
        console.log(this);
        
    }
};

obj1.greet();