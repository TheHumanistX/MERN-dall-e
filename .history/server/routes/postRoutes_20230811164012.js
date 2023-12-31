import express from 'express'
import * as dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary'

import Post from '../mongodb/models/post.js'

dotenv.config()

const router = express.Router()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// GET ALL POSTS

router.route('/').get( async (req, res) => {

})

router.route('/').post( async (req, res) => {
    const { name, prompt, photo } = req.body;
})

// CREATE A POST


export default router;