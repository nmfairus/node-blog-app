import mongoose from "mongoose";

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