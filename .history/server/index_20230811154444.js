import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './mongodb/connect'

dotenv.config();

const app = express();
const PORT = 8080;

app.use(cors())
app.use(express.json({ limit: '50mb'}))

app.get('/', async (req, res) => {
    res.send('Hello, from Dall-E.')
})

const startServer = async () => {
    app.listen(PORT, () => {
        console.log('Server listening on port ', PORT)
    })
}

startServer();
