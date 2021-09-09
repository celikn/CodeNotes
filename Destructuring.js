let student ={
    firstName:"John",
    lastName:"Bailey",
    score:90
}

//const fName=student.fistName;
//const lName =student.lastName;
//const score=student.score;

// Destructuring
const {firstName:fName,lastName:lName,score:s} =student;
console.log(fName,lName,s);

// array desctructuring 
const courses =["Angular","React","Node"];
const [course1,course2,course3] =courses;
console.log(course1,course2,course3);

// function destructuring 
function add(options){
    console.log(options.num1 +options.num2+ options.num3);

};

add({num1:10,num2:15,num3:20})

function add({num1=10,num2,num3}){ // we can also define default values
    console.log(num1+num2+num3);

};
