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
    enumerable: false, // makes enumeration false, in default  it will be false 
    configurable:false,  // makes delete and change false once set, it cannot be set to true in default  it will be false 
    writable: true // in default  it will be false 
});


console.log("name" in creditCard2);
console.log(creditCard2.inpropertyIsEnumerable("name"));

// Define properties for an empy object
  var creditCard3 = {

            };

Object.defineProperties(creditCard3, {
                _name: {
                    value: "John",
                    enumerable: true,
                    configurable: true,
                    writable: true,
                },
                // accessor properties
                name: {
                    get: function () {
                        return this._name;
                    },

                    set: function () {
                        return this._name = value;
                    },
                    enumerable: true,
                    configurable: true,

                }

            });

 console.log("name" in creditCard3);


  // if we use define method then enumeratable,configurable and writable attriubutes will be false 
           // as below they will be true
            var creditCard4 = {
                name: "John",

            };
     
            var descriptor = Object.getOwnPropertyDescriptor(creditCard4,"name");

            console.log(descriptor.enumerable); //true
            console.log(descriptor.configurable); //true
            console.log(descriptor.writable); //true
            console.log(descriptor.value); // true


 // prevent extent, seal and freeze
            var creditCard4 = {
                name: "John",

            };
    
            console.log(Object.isExtensible(creditCard4)); // true
            Object.preventExtensions(creditCard4); // false , now we cannot add new properties to the object

            console.log(Object.isSealed(creditCard4)); // false
            console.log(Object.seal(creditCard4)); // now we cannot do any configuration such as delete

            console.log(Object.isSealed(creditCard4)); // true
            console.log(Object.isFrozen(creditCard4)); // false

            console.log(Object.freeze(creditCard4)); 
            console.log(Object.isFrozen(creditCard4)); // true

