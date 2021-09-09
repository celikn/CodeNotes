    // promises
            function myAsyncFun() {
                let error = false;

                let promise = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        console.log("working async")
                        if (error) {
                            reject("Error");
                        } else {
                            resolve("Done");
                        }
                    }

                        , 1000);
                });
                return promise;
            }


            myAsyncFun().then(
                (success) => console.log(success),
                (error) => console.log(error)
            );

            // Handling with catch
            myAsyncFun().then(
                (success) => console.log(success),
                //(error) => console.log(error)
            ).cathc((error)=> console.log(error));

