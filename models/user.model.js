const mongoose = require('mongoose')

const User = mongoose.model("User",new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    phoneNo:String,
    accountType:String,
    favourite:{
        type: Boolean,
        default: false
    },
    categories:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Category"
        }
    ]
    // roles:[
    //     {
    //         type:mongoose.Schema.Types.ObjectId,
    //         ref:"Role"
    //     }
    // ]
}));

module.exports = User;

