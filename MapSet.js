  let names = ["john", "Bob", "Harry"];

            for (let value of names) {  // it can allow to use break and continue
                console.log(value);

            }


            let scores = new Map();
            scores.set("Math", 90)
            scores.set("physics", 95)
            scores.set("chemisty", 100)

            console.log(scores.get("Math"));
            console.log(scores.size);
            console.log(scores.has("Math"));
            scores.delete("Math");
            console.log(scores.has("Math"));
            scores.clear();

            // Maps
            let scores2 = new Map([["Math", 90], ["physics", 95], ["physics2", 88]]);
            for (let key of scores2.keys()) {
                console.log(key); // key
                console.log(scores2.get(key)); // value
            }

            for (let value of scores2.values()) {
                console.log(value); // value
            }

            for (let entry of scores2.entries()) {
                console.log(entry[0], entry[1]); // entry
            }
            for (let [k, v] of scores2.entries()) {
                console.log(k, v); // entry
            }

            let courses3 = new Set(["Angular","Angular2","Angular3"]); // we can passs list 

            //let courses3 = new Set();
            //courses3.add("Angular");
            //courses3.add("Node");
            //courses3.add("Java");
            for (let entry of courses3) {
                console.log(entry); // entry
            }

            console.log(courses3.has("React"));
            console.log(courses3.size);

