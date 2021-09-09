
// Sort objects by value
var homes=[
    {"ID":3, "price":120},
    {"ID":4, "price":90},
    {"ID":5, "price":100},
]

// Sort objects list by price value
homes.sort(function(a, b) {
    return parseFloat(a.price) - parseFloat(b.price);
});

homes.forEach(home => {
    document.write(home.ID +" :" + home.price +"<br>");
});



//Sort list of values in the array. 
function compareNumbers(a, b) {
  return a - b;
}

var studentIDs = [30,50,5,10];
studentIDs.sort(compareNumbers);
document.write(studentIDs);
