require('dotenv').config()
const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
const errorMiddleware = require('./middlewares/error-middleware');

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}));
app.use('/api', router);
app.use(errorMiddleware);

app.listen(PORT, (error) =>{
    if(!error) {
        console.log(`Server is running on ${process.env.API_URL}`);
    } else {
        console.log("Error occurred, server can't start", error);
    }    
});