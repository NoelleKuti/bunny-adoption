import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'
import path from 'path'


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
import authRoutes from './routes/authRoutes.js'
//db
import connectDB from "./db/connect.js";

app.use(cors(), express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Connected To Express!');
});

app.get(cors(corsConfig));


//serve from index.html '\'
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV == "production") {
	app.use(express.static("client/build"));
  
	app.get("*", (req, res) => {
	  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
	});
  }
  
  

  //add routes
app.use('/api/v1/bunnies', bunniesRoutes);

app.use('/api/v1/applications', applicationsRoutes);
app.use('/api/v1/auth', authRoutes);

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