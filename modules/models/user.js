var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

var UserSchema = new Schema({
    email : {
        type : String,
        required : true,
        unique : true 
    },
    username : {
        type : String ,
        unique : true ,
        required : true 
    },
    password :{
        //prevent using special characters for security matters
        type : String , 
        required : true
    },
    currentLevel : {
        type : Number,
    },
    // shortcuts : {
    //     //nested objects should be allowed here for different shortcuts states
    // },
    registeredAt : {
        type : Date,
        default : Date.now
    },
    // projects :{
    //     //nested objects should be allowed here for different shortcuts states
    // },
    currentTopic: String, //to keep track the current sub level for lightning the content level on any sublevel at the loading bar
    coins : {
        CPP : Number ,
        CSHARP : Number ,
    },
    likes:{
        counts : Number,
        where : {
            type : String, 
        }

    },
    honours : {
        //start
        //noob
        //medium
        //excellent
        //professional
        //venerable
    },
    courses : {
        type : String,
        default : "C++",
    },
    avatar : {
        url : String ,
    },
    
})

UserSchema.pre('save' , function(next) {
    
    bcrypt.hash(this.password, 10, (err, hash) => {
        this.password = hash;
        next();
    });
})

module.exports = mongoose.model('user' , UserSchema);