 function Doctor(name){
                this.name =name

            }
           
            // Create object that inherits Object.prototype methods
            Doctor.prototype =Object.create(Object.prototype,{
                constructor: {
                    configurable:true,
                    enumerable:true,
                    value:Doctor
                }
            })

            Doctor.prototype.treat =function(){
                return "treated"
            }
            Doctor.prototype.toString =function(){
                return "Doctor"
            }

            function Surgeon(name,type){
                this.name=name;
                this.type=type;
            }

            Surgeon.prototype =new Doctor();
            Surgeon.prototype.constructor =Surgeon;

            Surgeon.prototype.toString =function(){
                return "Surgeon"
            }


            var doctor = new Doctor("John");
            var surgeon = new Surgeon("Bob","Dental");
            console.log(doctor.treat())
            console.log(surgeon.treat())
            console.log(doctor.toString())
            console.log(surgeon.toString())
