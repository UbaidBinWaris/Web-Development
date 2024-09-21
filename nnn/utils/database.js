import mongoose from "mongoose";

let is_connected =  false;

const connectDB = async () => {
    mongoose.set('strictQuery' , true);

    if(is_connected){
        console.log("DB is already connected");
        return;
    }
    try {
        
    } catch (error) {
        
    }
}