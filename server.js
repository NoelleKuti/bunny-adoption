import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'


dotenv.config();

const corsConfig = {
    origin: [
        'http://localhost:3000',
        'http://localhost:5000'
    ]
}
const app = express();

//routers
import bunniesRoutes from './routes/bunniesRoutes.js'
import applicationsRoutes from './routes/applicationsRoutes.js'
//db
import connectDB from "./db/connect.js";

app.use(cors(), express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Connected To Express!');
});

app.get(cors(corsConfig));

const port = process.env.PORT || 5000;

app.use('/api/v1/bunnies', bunniesRoutes);

app.use('/api/v1/applications', applicationsRoutes);

//mongoose
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        
        app.listen(port, () => console.log(`Server listening on port ${port}`))
    } catch (err) {
        console.log(err);
    }
}

start();