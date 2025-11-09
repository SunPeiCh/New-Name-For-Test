const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));

// use express ejs layouts
app.use(expressLayouts);
app.set("layout","layout")

//middleware to serve static files
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

//routes
app.get("/",(req,res)=>{
    res.render("home",{
        title:"Home Page"
    });
});
app.get("/about",(req,res)=>{
    res.render("about",{
        title:"about Page"});
});

app.get("/variables",(req,res)=>{
    res.render("variables", {
        title: "EJS Variables Example6",
        user:{
            name: "Ricky",
            age: 25,
            hobbies:["Reading", "Traveling", "Gaming"],
            isActive: false
        }
        
    });
});
app.get("/conditionals",(req,res)=>{
    res.render("conditionals", {
        title: "EJS Conditionals Example",
        user: {
            isLoggedIn: false,
            isAdmin: false,
            hasItems: true
        }
    });
});
app.get("/loop",(req,res)=>{
    res.render("loop",{
        title:"EJS Loops Example",
        food:["Pizza", "Burger", "Pasta", "Sushi", "Salad"]
    });
});
app.get("/form",(req, res)=>{
    res.render("form",{
        title:"EJS Form Example",

    });
})
app.post("/form",(req, res)=>{
    console.log("Form submitted",req.body);
    res.render("form-success",{
        title:"Form Submitted",
        data: req.body
    });
})


//start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});