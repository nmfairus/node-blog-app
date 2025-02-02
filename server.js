// Import the express library
import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './srv/routes/userRoutes.js';

// Import database
import connectToDatabase from "./srv/config/conn.js";
connectToDatabase();

// Create an instance of express
const app = express();
const port = process.env.PORT;

// Use the body-parser package in our application and enable CORS
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Import user routes
app.use('/users', userRoutes);

// Check for errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


