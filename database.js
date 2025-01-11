const mongoose = require('mongoose');
const passport = require('passport');

exports.connectMongoose = ()=>{
    mongoose.connect("mongodb://localhost:27017/passport").then((e)=>{
        console.log(`Connected to Mongodb: ${e.connection.host}`)
    }).catch((e)=>console.log(e));
};

const userSchema = new mongoose.Schema({
    userName: {
        type:String,
        required: true,
        unique: true,
    },
    password: String,
})

exports.User = mongoose.model("User", userSchema);