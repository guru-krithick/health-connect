import express from 'express';
<<<<<<< HEAD

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
    });
=======
import {connectDB} from './db/connectDB.js';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
// app.get('/', (req, res) => {
//     res.send('Hello World 3');
// });

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log('Server is running on port : ' + PORT);
    });
    //VhFxbKGt7kvr3q8H
>>>>>>> ec68f0b7be5ba58f2e614d18e3f6944f786d8b9c
