// Import the express library
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './srv/routes/userRoutes.js';

// Import database
import connectToDatabase from "./srv/config/conn.js";
connectToDatabase();

// Create an instance of express
const app = express();
const port = 3000;

// Use the body-parser package in our application and enable CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Import user routes
app.use('/users', userRoutes);


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


