import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();

const app = express();

app.user(cors())
app.use(express.json({ limit: '50mb'}))