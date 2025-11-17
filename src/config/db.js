module.exports = async function connectDB() {
    const mongoose = require('mongoose');
    const dbURI = process.env.MONGODB_URI;

    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};