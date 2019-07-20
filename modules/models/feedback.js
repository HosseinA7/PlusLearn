var mongoose = require('mongoose');
var user = require('./user');

var schema = mongoose.Schema({
    text : {
        type : String,
        required : true,
    },
    registeredAt : {
        type : Date,
        default : Date.now()
    },
    from : {
        type : String,
        required : true
    },
    resolved : {
        type : Boolean,
        required : true,
        default : false 
    }
})

var suggestion = mongoose.model('suggestion',schema);

module.exports = suggestion ; 