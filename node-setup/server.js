const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./connect/database');
const port = process.env.PORT || 5000;

connectDB();

const app = express();

// read json data from body of request and pass to req.body in controller
// without this middleware req.body will be undefined in controller and we will not able to read data from body of request
app.use(express.json()); 

app.use(express.urlencoded({extended: false}))

app.use('/api/tasks', require('./routes/taskRoutes'));
// /api/tasks => path
// require('./routes/taskRoutes') => file

app.use(errorHandler);
app.listen(port,() => console.log(`server listening on ${port}`));