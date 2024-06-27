require("dotenv").config();
const express = require("express");
const connectDB = require('./config/db')
const cors = require('cors')
const todoRoutes = require('./routes/todo')
const mongoose = require("mongoose");
const todo = require("./controllers/todo");
const authRoutes = require('./routes/auth')
const connectMongoDB = require("./config/db");
const { authenticate }  = require('./middlewares/authMiddleware')


const app = express();
app.use(express.json());



const PORT = process.env.PORT || 8000;


connectMongoDB()
//Cors

app.use(cors({
	origin: [
		"http://localhost:3000"
	],
	credentials : true
}))



//app.use('/api/todo',authenticate, todoRoutes)
app.use('/api/todo',todoRoutes)
app.use('/api',authRoutes)



app.listen(PORT, () => {
	console.log(`Todo app server is listenting on port ${PORT}`);
});