import mongoose from "mongoose";
import validator from "validator";
const messageSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First Name Must Contain at least 3 Characters"],
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"Last Name Must Contain at least 3 Characters"],
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail],
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"Phone Number Must Contain Exact 10 Digits!"],
        maxLength:[10,"Phone Number Must Contain Exact 10 Digits!"],
    },
    message:{
        type:String,
        required:true,
        minLength:[10,"Message Must Contain at Least 10 Characters"],
    },
    
});

export const Message=mongoose.model("Message",messageSchema);