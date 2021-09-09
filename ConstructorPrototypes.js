   // Constructor for objects.
       function Flight(airlines, flightNumber){
           this.airlines =airlines;
           this.flightNumber = flightNumber;
           this.display= function(){
               console.log(this.airlines);
               console.log(this.flightNumber);

           };
 
       }

       var flight1 =new Flight("american AA",123);
       var flight2 =new Flight("south",3454);
       flight1.display();
       flight2.display();
       console.log(flight1 instanceof Flight); // true 
       console.log(flight2 instanceof Flight); // true
       console.log(flight2.constructor === Flight); // true

       // Using Protoytpes

     var passenger ={
         name:"John",
     };
    
    console.log("name" in passenger); // true 
    console.log(passenger.hasOwnProperty("name")); //true
    console.log("hasOwnProperty" in passenger); //true its come from inbuilt protypes
    console.log(passenger.hasOwnProperty("hasOwnProperty")); //false

    console.log(Object.prototype.hasOwnProperty("hasOwnProperty")) // true


    // Accessing protypes 
     var myOBj={};

     var protoype =Object.getPrototypeOf(myOBj); 
     console.log(protoype === Object.prototype) // true
     console.log(Object.prototype.isPrototypeOf(myOBj)) // true

    // redefine prototype method 
    myOBj.toString =function(){
        return "My ToString Method"
    }

    console.log(myOBj.toString());





   // Constructor for objects.
       function Flight(airlines, flightNumber){
           this.airlines =airlines;
           this.flightNumber = flightNumber;
          
       }

       // Create prototype method for constructor
       Flight.prototype.display= function(){
               console.log(this.airlines);
               console.log(this.flightNumber);

        };

        // Create prototype method for constructor
        Flight.prototype = {

            constructor: Flight, // otherwise ight2.constructor === Flight will return false

            display: function(){
               console.log(this.airlines);
               console.log(this.flightNumber);
            },
            toString : function(){
                return "flight number:" +this.flightNumber
            }

        };
 
