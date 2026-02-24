import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:[true, "First Name is Required"],
        minLength:[3, "First Name must be at least 3 characters"],
        maxLength:[30, "First Name must be less than 30 characters"],
    },
    lastName: {
        type:String,
        required:true,
        minLength:[3, "Last Name must be at least 3 characters"],
        maxLength:[30, "Last Name must be less than 30 characters"],
    },
    email: {
        type:String,
        required:true,
        validate:[validator.isEmail, "Please enter a valid email address"],
    },
    phone: {
        type:String,
        required:true,
        minLength:[10, "Phone number must be at least 10 digits"],
        maxLength:[10, "Phone number must be at most 10 digits"],
    },
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);