import { Schema , model , models } from "mongoose";

const user_schema = ({
    email:{
        type: String,
        required: [true , "Email is Required!"],
        unique: [true , "Email is alredy exists!"]
    },
    username:{
        type: String,
        required: [true , "Username is Required!"],
    },
    image:{
        type: String,
    }
});

const User = models.User || model("User" , user_schema);

export default User;