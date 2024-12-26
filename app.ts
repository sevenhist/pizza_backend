import 'dotenv/config'; // Damit Umgebungsvariablen von .env geladen werden
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import router from './routes/index.js';
import errorMiddleware from './middlewares/error-middleware.js';

const PORT: number = Number(process.env.PORT) || 3002; // Typisierung für PORT
const API_URL: string = process.env.API_URL || 'http://localhost:3002'; // API_URL mit Fallback

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: "https://sevenhist.github.io/pizzaiolo",
}));
app.use('/api', router);
app.use(errorMiddleware);

// Start des Servers
app.listen(PORT, (error?: Error) => {
    if (!error) {
        console.log(`Server is running on ${API_URL}`);
    } else {
        console.log("Error occurred, server can't start", error);
    }
});
