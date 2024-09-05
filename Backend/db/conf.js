import mongoose from 'mongoose';
import express from 'express';
import Blog from './models/todo.js'; // Ensure that the path is correct

// Connect to MongoDB
await mongoose.connect('mongodb://127.0.0.1:27017/');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    // Create a new blog instance
    const blog = new Blog({ title: 'Hello', author: 'Ubaid', body: '6_packs' });

    // Save the blog to the database
    await blog.save();

    res.send('Blog saved successfully!');
  } catch (error) {
    console.error('Error saving blog:', error);
    res.status(500).send('An error occurred while saving the blog.');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
