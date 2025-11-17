const express = require('express');
const mongoose = require('mongoose');
const messageRoutes = require('./routes/messageRoutes');
const { connectDB } = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.use('/api/messages', messageRoutes());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});