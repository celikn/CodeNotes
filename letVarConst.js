"use strict";
    function letDemo(){

        var i=10;
        // let only belong to scope it is declared.
        for (let i=0; i<=20; i++){  // i will be only available inside for loop scope by using let 
            console.log(i);
            let x=4;
            var y=5;
        }
        console.log(i); // 10 
        console.log(y); // 5
        //console.log(x); // it will get x is not defined 
    }
    letDemo();

    var pi =3.14;
    pi =3.79;
    console.log(pi);

    const pi2 =3.14;
    //pi2 =3.79; // cannot assign value to const 
    console.log(pi2);

    const product ={}; //  variable cannot be reassign another object 
    product["name"]= "Iphone";  // but we cannot reassign properties
    product["name"]= "Windows";
    console.log(product["name"]);

    const product2 =Object.freeze({});
    //product2["name"]= "Iphone";  // we cannot assign it will get error


    

    /// Variable subsitution
    let name ="John";
    let quote = `you are creator of 
    your destiny ${name}`;
    console.log(quote);

    
