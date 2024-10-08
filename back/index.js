import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConfig } from './src/config/dbConfig.js';
import {errorHandler} from './src/utils/errorHandler.js';
import MenuRoutes from './src/routes/menuRoutes.js';
import swaggerDocs from './src/config/swaggerConfig.js';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const port  = process.env.PORT || 5000;
const allowedOrigins = 'https://menu-managment-system.vercel.app/'
  
  const corsOptions = {
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: 'GET,PUT,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
  };

  app.use(cors(corsOptions));
  
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

dbConfig();

app.get('/',(req,res) => {
    res.send('Welcome to CLOIT');
})


app.use('/api/menus', MenuRoutes)

swaggerDocs(app);
app.use(errorHandler);

app.listen(
    port, () => {
        console.log(`Server is running on port ${port}`);
    }
);