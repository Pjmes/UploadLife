//Starting point for server app
import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { trusted } from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

//all routes will start with posts


app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);


//Variable to connect to mongodb
const CONNECTION_URL = 'mongodb+srv://pjmes:adpbb1020@cluster0.ae01hv8.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewURLParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
