import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
      const MONGODB_URI = process.env.MONGODB_URI;
      const options = {};
  
      // Connect to MongoDB
      await mongoose.connect(MONGODB_URI, options);
  
      console.log('MongoDB connected successfully ✅');
    } catch (error) {
      console.error('MongoDB connection error ❌:', error.message);
      process.exit(1); // Exit the process with failure
    }
  };

export default connectToDatabase;