//create objects

const person ={
    name:'priyanshu',
    age:22,
    "is'Student":false,
    greet:function(){
        console.log("welcome");
        
    }
};

// person.greet();
// console.log( person.name);


//? Accessing properties

// console.log(person["is'Student"]);

// person.age=18;
// console.log(person);

let idType="StudentID"
let student={
    [idType]:'A123456',
    sName:'priyanshu',
    sAge:22,
    isStudent:true,
    greet:function(){
        console.log(`Hey, my ${idType} is ${student[idType]} and my name is ${student.sName}.`);
        
    }
};

student.greet()



