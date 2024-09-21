import mongoose from "mongoose";

let is_connected =  false;

const connectDB = async () => {
    mongoose.set('strictQuery' , true);

    if(is_connected){
        console.log("DB is already connected");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName:"share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("DB is connected");
        is_connected = true;


    } catch (error) {
        console.error("Error connecting to DB", error);
    }
}