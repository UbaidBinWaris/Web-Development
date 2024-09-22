import mongoose from "mongoose";

{console.log("Connecting");}

const connect_to_db = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error: ", error);
  }
};

export default connect_to_db;
