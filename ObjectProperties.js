var course1 ={
    name : "javascript",
}
course1.name ="Java Project"

var course2 =new Object();
course2.name ="Reactjs";
course1.description ="Details about Java";

delete course1.description;

console.log("name" in course1);  // check if the property exist in object 
console.log("description" in course1);  // check if the property exist in object 
console.log( "toString" in course1) // this is derived object property and it returns true
console.log( course1.hasOwnProperty("toString")) // to check actuall property we need to use hasOwnProperty method

// Enumeration of object for key and value 
for (var eachProperty in course1){
    console.log(eachProperty);  //key 
    console.log(course1[eachProperty]); // value
}

var allProperties = Object.keys(course1) // takes key properties into array
for ( var i =0; i<allProperties.length; i++){
    console.log(allProperties[i]); // key
    console.log(course1[allProperties[i]]); // value
}

// Check enumerability object
console.log(course1.propertyIsEnumerable("name")); // true
console.log(allProperties.propertyIsEnumerable("length")); // false because it is built in property


// get and set property in object
var creditCard={
    _name : "John",
    get name(){
        return this._name
    },
    set name(value){
       this._name=value;
    }
}

console.log(creditCard.name);
creditCard.name="Bob";
console.log(creditCard.name);

// make  an object non-enumerable
var creditCard2={
    name : "John",
}
Object.defineProperty(creditCard2,"name",{
    enumerable: false, // makes enumeration false
    configurable:false  // makes delete and change false once set, it cannot be set to true
});

console.log("name" in creditCard2);
console.log(creditCard2.inpropertyIsEnumerable("name"));








