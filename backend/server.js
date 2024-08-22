const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const homeRoute = require('./routes/home');

// Initialize environment variables
require('dotenv').config();

// Initialize Express app
const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Use home route for the root URL
// app.use('/', homeRoute);


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/devQuikLearn', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

// Start the server and connect to MongoDB
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
