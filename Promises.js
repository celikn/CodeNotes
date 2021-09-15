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
//// Create your own promise example

delay("nflrnfelrkf")
.then(() => document.write("hello"))
.catch((err) => console.log(err));


delay(1000)
.then(() => document.write("hello"))
.catch((err) => console.log(err));


function delay(time) {
    return new Promise ((resolve,reject) => {
      if (isNaN(time)){
          reject(new Error("delay requires a valid number"))
      } else {

      setTimeout(resolve, time)};
})


/////-----------------------
// Using fetch with promises
var movieAPI= "https://api.themoviedb.org/3/movie/popular?api_key=2426d550977235ca6217917baa94407f&page=1"

function getData() {
    fetch(movieAPI)
        .then(response => response.json())
        .then(json => {
            console.log(json.total_pages);
            console.log(json.results[0]);
            document.write(json.results[0].original_language);
            
        })
        .catch(err => console.log(err))
}
getData()

 // Using fetch with async
var movieAPI= "https://api.themoviedb.org/3/movie/popular?api_key=2426d550977235ca6217917baa94407f&page=1"
getData()
.then(()=>console.log("fetch successful"))
.catch(err=> console.log(err))

async function getData(){
    let response= await  fetch(movieAPI);
    let json = await response.json();
    console.log(json.total_pages);
    console.log(json.results[0]);
    document.write(json.results[0].original_language);
}    

    
/////_________________________


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
    
    
    /////////////Promise.All 
    
    
              

// draft of promise all //it will give results in array

//let promises =[__,__,__];
//Promise.all(promises)
//.then((results) => {
//})
//.catch((err)=> console.log(err));



//it will give results in array
// if any of promise have error then nothing will be return 
let promises =[];
for (i=0; i<100; i++){
       promises.push(fetch(movieAPI))
}

Promise.all(promises)
.then((results) => {
    console.log(" all 100 promises resolved");
}).catch((err)=> console.log(err));

    
    
    
    
    
