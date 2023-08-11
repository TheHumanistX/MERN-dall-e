import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './mongodb/connect.js'
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config();

const app = express();
const PORT = 8080;

app.use(cors())
app.use(express.json({ limit: '50mb'}))

app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

app.get('/', async (req, res) => {
    res.send('Hello, from Dall-E.')
})
console.log(process.emitWarning.MONGODB_URL)
const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(PORT, () => {
            console.log('Server listening on port ', PORT)
        })
    } catch (err) {
        console.log('Error in connecting to MongoDB or launching backend server: ', err)   
    }
}

startServer();
