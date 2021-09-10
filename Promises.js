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



////---------------------


   async function loadFeatures(geojsonItem, map) {

            return new Promise(function (resolve, reject) {
                var features = new ol.format.GeoJSON().readFeatures(
                    geojsonItem,
                    { featureProjection: map.getView().getProjection() })
                console.log(features)
                resolve(features);
            });
        };




        //2. Create an async function
        async function executeLoadFeatureFunction() {
            console.log('Before promise call.')
            //3. Await for the first function to complete
            const result = await loadFeatures(geojsonItem, map);
            console.log(result);
            console.log('Promise resolved: ' + result.toString())
            console.log('Next step.')
            return result
        };


        executeLoadFeatureFunction().then(....
                                          )