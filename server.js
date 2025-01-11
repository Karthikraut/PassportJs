const express  =require("express")
const {connectMongoose,User} =require("./database.js")
const ejs = require("ejs");

const app =express()

connectMongoose();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.render("index");
})

app.get('/register', (req, res) => {
    res.render('register'); // Render the registration page (register.ejs)
});

app.get('/login', (req, res) => {
    res.render('login'); // Render the registration page (register.ejs)
});

app.post("/register",async (req,res)=>{
    const user = await User.findOne({username:req.body.username});

    if(user) return res.status(400).send("User already exists");

    const newUser =await User.create(req.body);

    res.status(201).send(newUser);
})


app.listen(3000,()=>{
    console.log("Server is Running on Port:3000");
})