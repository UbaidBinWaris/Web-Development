import mongoose, { Schema } from "mongoose";

const sch = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});

const Topic = mongoose.models.Topic || mongoose.model("Topic", sch);

export default Topic;
