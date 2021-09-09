// Call method 
function displayDetails(){
        document.write(this.id +"<Br>");
        document.write(this.name +"<Br>")
    }
var student ={
    id:1,
    name:"Bob",
};

displayDetails.call(student);  // passing method to object

// Apply method
function displayDetailsWithTestScore(testScore){
        document.write(this.id +"<Br>");
        document.write(this.name +"<Br>")
        document.write(testScore +"<Br>")

    }

displayDetailsWithTestScore.apply(student,[10]);  // passing method to object with parameters

// Bind Method
var  displayForStudent = displayDetailsWithTestScore.bind(student);
displayForStudent(10);
