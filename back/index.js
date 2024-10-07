import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConfig } from './src/config/dbConfig.js';
import {errorHandler} from './src/utils/errorHandler.js';

dotenv.config();

const app = express();
const port  = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

dbConfig();

app.get('/',(req,res) => {
    res.send('Welcome to CLOIT');
})


app.use('/api/permissions', PermissionRoutes)

app.use(errorHandler);

app.listen(
    port, () => {
        console.log(`Server is running on port ${port}`);
    }
);