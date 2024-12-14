import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"Hospital_Management_Deployed"
    }).then(()=>{
        console.log("Database connected successfully");
    }).catch((err)=>{
        console.log(`some error occured while connecting to database: ${err}`);
    })
};