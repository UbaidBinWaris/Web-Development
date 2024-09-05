import mongoose from 'mongoose';

// Define the schema
const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  body: String,
});

// Create the model
const Blog = mongoose.model('Blog', blogSchema);

// Export the model
export default Blog