import mongoose from 'mongoose'

const connectDB = (url) => {
    mongoose.set('strictQuery', true)
}