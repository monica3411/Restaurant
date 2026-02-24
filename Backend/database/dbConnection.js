import mongoose from "mongoose";

export const dbConnection = async () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName:"RESTRAUNT"
    }).then(() => {
        console.log("Database Connected Successfully");
    }).catch(err=>{
        console.log("Database Connection Failed");
    });
    }
