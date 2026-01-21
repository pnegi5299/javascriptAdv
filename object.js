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

// let idType="StudentID"
// let student={
//     [idType]:'A123456',
//     sName:'priyanshu',
//     sAge:22,
//     isStudent:true,
//     greet:function(){
//         console.log(`Hey, my ${idType} is ${student[idType]} and my name is ${student.sName}.`);
        
//     }
// };

// student.greet()


const areObjectsEqual = (obj1, obj2) => {
    let o1 = Object.keys(obj1);
    let o2 = Object.keys(obj2);

    if (o1.length != o2.length) {
        console.log('These keys are not same');
        return false;
    }
    for (let key in obj1) {
        if (obj1[key] != obj2[key]) {
            return false;
        }
    }
    return true;
};

let obja = {name:'alice', age:26, city:'new pork'};
let objb = {name:'alice', age:26, city:'new york'};

console.log(areObjectsEqual(obja, objb));




