const mongoose=require("mongoose");

//create a schema
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        lowercase: true,
        required: [true,"Please provide an Email"]

    },
    age:{
        type:Number,

    }
},
{timestamps:true}
);

//create a model
const User = mongoose.model('User',userSchema);
module.exports=User;