import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './Route/user.route.js'

dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// connect to mongoDB
try {
    mongoose.connect(process.env.MONGOURL)
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

//Routes

app.use('/api',router)