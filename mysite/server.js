const express = require("express");
const app = express();

//Requst processing
console.log("welcome")
alert("Hello! I am an alert box!!");

app.get("/", (req, res) => {
    res.send("<h1> WELCOME TO APNA GARAGE </h1>"+
                   "<hr/>"+
                   "<ol>"+
                    "<li> Car Services</li>"+
                    "<li> Bike Services</li>");
});

app.get("/about", (req, res) => {
    res.send("<h1>CAR Services for customers</h1>");
    res.send("<h1>BIKE Services for customers</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<p>Contact Number:9881735801</p>"
            +"<p>Email:Kailas Rautrao</p>" );
});

app.get("/services",(req, res)=>{
    var products=[
    {"id":1,"title":"Repairing","description":"Parts and batteries repair","price":"RS.5000"},
    {"id":2,"title":"Renew","description":"Renew of parts and batteries","price":"RS.500"},
    {"id":3,"title":"coloring","description":"Color to damaged parts","price":"RS.1000"},
    {"id":4,"title":"Alignment","description":"Vehicle Alignment Checking and setting","price":"RS.800"},
 
    ];
    res.send(products);

})
app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});