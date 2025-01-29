import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// Setting up the connection
const dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI);

// connection func
async function connectToDatabase() {
    try {
        await mongoose.connection;
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
}

export default connectToDatabase;