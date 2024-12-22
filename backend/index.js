// import express from 'express';
// import cors from 'cors';

const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const router = require('./routes/route')

require ('dotenv').config()

const app = express()
app.use(cors())

app.use(express.json())
app.use("/api", router)


const PORT = 8000 || process.env.PORT


connectDB().then(() => {
        app.listen(PORT, () => {
            console.log('Connected to DB')
        console.log(`Server is running on port ${PORT}`)
    })
})
