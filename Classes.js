      class Passenger {
            constructor(firstName,lastName,frequentFlyer){
                this.firstName=firstName;
                this.lastName=lastName;
                this.frequentFlyer=frequentFlyer;
            }
        }

        let passenger = new Passenger("hafıeej","kdfekl",12343);
        console.log(passenger);
        let passenger2= new Passenger("dfdsgdf","grdfsds",4365)
        console.log(passenger2);


        class BMW{
            constructor(make,model,year){
                this.make=make;
                this.model = model;
                this.year =year;

            }
            start(){
                console.log("engine starts")
            }
            stop(){
                console.log("engine stops")
            }
        }

        class ThreeSeries extends BMW{
            constructor(make,model,year,cruseControlEnabled){
                super(make,model,year);
                this.cruseControlEnabled =cruseControlEnabled;
            }
        }

        class FiveSeries extends BMW{
            constructor(make,model,year,parkingAssistanceEnabled){
                super(make,model,year);
                this.parkingAssistanceEnabled =parkingAssistanceEnabled;
            }

            // overwrite function 
            start(){
                console.log( "started five series")
            }
        }

        let threeSeries =new ThreeSeries("BMW","2323",2012,true)
        let fiveSeries =new FiveSeries("BMW","45452",2012,true)


        console.log(threeSeries.model)
        console.log(threeSeries.cruseControlEnabled)

        console.log(fiveSeries.model)
        console.log(fiveSeries.parkingAssistanceEnabled)
        fiveSeries.start()    // overwrite function 

        fiveSeries.stop()
